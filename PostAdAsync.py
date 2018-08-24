from functools import partial
from json import dump

import login
import RequestUtils
import KijijiCategories
from KijijiGlobal import KijijiGlobal
import delete_ad

from tornado import ioloop, httpclient
import lxml
import urllib

failed = []
created = 0
def handle_delete(adId, response):
    print("Delete adId:", adId)
    global created
    created -= 1
    if created == 0:
        print("Stopping loop")
        ioloop.IOLoop.instance().stop()

def handle_failed_create(catId, response):
    print("Failed to create category:", catId)
    print("Url not working:", response.effective_url)
    failed.append(catId)

def handle_success_create(sessionStr, adId):
    print("Successfully created ad. Returned id:", adId)
    global created
    created += 1
    delete_ad.delete_ad(sessionStr, adId, handle_delete)

def handle_create(categoryId, sessionStr, cbs, response):
    if response.effective_url == "https://www.kijiji.ca/p-submit-ad.html":
        return cbs['OnFailCreate'](categoryId, response)

    try:
        adId = urllib.parse.parse_qs(urllib.parse.urlparse(response.effective_url).query)['adId'][0]
    except:
        return cbs['OnFailCreate'](categoryId, response)

    cbs['OnSuccessCreate'](sessionStr, adId)

def parse_html(html):
    r = {}
    for i in html.forms[0].xpath('//*[@name]'):
        name = i.get('name')
        if 'value' in i.keys():
            r[name] = [i.value]
        else:
            r[name] = [""]
    return r

def remove_empty(parsed):
    r = {}
    for i in parsed.items():
        if not i[1] == [''] and not i[1] == [None]:
            r[i[0]] = i[1]
    return r

def handleExceptionalFields(extraField, toAddTo):
    for k in extraField:
        toAddTo[k[0]] = [k[1][0]]

def handleExtraFields(toAddTo, extraFields):
    for d in extraFields.items():
        if d[0] in toAddTo:
            toAddTo[d[0]] = d[1]

def handle_getad(categoryId, sessionStr, extraFields, finalCb, response):
    try:
        kijGlobals = KijijiGlobal()
        print("Finished getting category:", categoryId, "with code:", response.code)
        respBody = response.body.decode('utf-8', 'ignore')
        html = lxml.html.fromstring(respBody).forms[0]
        parsed = parse_html(html)
        parsed = remove_empty(parsed)
        if str(categoryId) in kijGlobals.ExtraFields.keys():
            handleExceptionalFields(kijGlobals.ExtraFields[str(categoryId)], parsed)
        parsed['images']=['']
        # {
        #     "ca.kijiji.xsrf.token":"",
        #     "postAdForm.fraudToken":"",
        # }
        # parsed['uuid']=['']
        # parsed['adId']=['']
        # parsed['postAdForm.galleryImageIndex']=['']
        # parsed['postAdForm.geocodeLat']=['45.4487283']
        # parsed['postAdForm.geocodeLng']=['-75.67273650000004']
        # parsed['postAdForm.city']=['Rockcliffe Park']
        # parsed['postAdForm.province']=['ON']
        # parsed['PostalLat']=['']
        # parsed['PostalLng']=['']
        parsed['categoryId']=[str(categoryId)]
        parsed['postAdForm.locationId']=['1700185']
        # parsed['postAdForm.mapAddress']=['Rockcliffe Park, ON K1M 0S6']
        parsed['postAdForm.postalCode']=['K1M 0S6']
        parsed['postAdForm.showLocationOnMap']=['false']
        parsed['postAdForm.saveLocation']=['true']
        parsed['postAdForm.mapRadius']=['75.29440284317512']
        parsed['postAdForm.adType']=['OFFER']
        parsed['postAdForm.priceType']=['FIXED']
        parsed['postAdForm.priceAmount']=['1000']
        parsed['postAdForm.attributeMap[forsaleby_s]']=['ownr']
        parsed['postAdForm.title']=['asdfasdff']
        parsed['postAdForm.description']=['asdfasdfasdfasdf']
        # parsed['file']=['']
        # parsed['postAdForm.youtubeVideoURL']=['']
        # parsed['location-fallback']=['k1m 0s6']
        # parsed['postAdForm.phoneNumber']=['']
        parsed['featuresForm.topAdDuration']=['7']
        # parsed['submitType']=['saveAndCheckout']
        handleExtraFields(parsed, extraFields)

        postBody = urllib.parse.urlencode(parsed, doseq=True)

        client = httpclient.AsyncHTTPClient()
        httpmethod = "POST"
        url = "https://www.kijiji.ca/p-submit-ad.html"
        nativeCookies = { 'Content-Type': 'application/x-www-form-urlencoded',
                "Cookie": sessionStr}
        request = httpclient.HTTPRequest(url, method=httpmethod, body=postBody, headers=nativeCookies)
        client.fetch(request, partial(handle_create, categoryId, sessionStr, finalCb))
    except Exception as e:
        print(e)
        print("Failed catId:", categoryId)
        global failed
        failed.append(categoryId)

def post_ad(sessionStr, fields):
    postBody = urllib.parse.urlencode(fields, doseq=True)

    client = httpclient.AsyncHTTPClient()
    httpmethod = "POST"
    url = "https://www.kijiji.ca/p-submit-ad.html"
    nativeCookies = { 'Content-Type': 'application/x-www-form-urlencoded',
            "Cookie": sessionStr}
    request = httpclient.HTTPRequest(url, method=httpmethod, body=postBody, headers=nativeCookies)
    client.fetch(request, partial(handle_create, fields['categoryId'], sessionStr, handle_failed_create))

def get_ad(categoryId, sessionStr, extraFields = None, finalCb = None):
    if finalCb == None:
        finalCb = Create_Callbacks()
    url = 'https://www.kijiji.ca/p-post-ad.html?categoryId={0}'.format(categoryId)
    client = httpclient.AsyncHTTPClient()
    httpmethod = "GET"
    nativeCookies = { "Cookie": sessionStr }
    request = httpclient.HTTPRequest(url, method=httpmethod, headers=nativeCookies)
    client.fetch(request, partial(handle_getad, categoryId, sessionStr, extraFields, finalCb))

def Create_Callbacks():
    cbs = {}
    cbs['OnSuccessCreate'] = handle_success_create
    cbs['OnFailCreate'] = handle_failed_create
    return cbs

def main(session, toTest):
    for c in toTest:
        get_ad(c, session, None, handle_delete)

if __name__ == '__main__':
    catId = 10
    children = KijijiCategories.load_child_flat(catId)

    session = login.new_session()
    cookiesStr = RequestUtils.get_session_str(session)
    main(cookiesStr, toTest)
    ioloop.IOLoop.instance().start()
    with open('./data/failed-creates.json', 'w') as f:
        dump(failed, f)
