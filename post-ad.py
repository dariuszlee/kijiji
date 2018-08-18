import requests
import lxml.html

import urllib
import re
import json

import login
from get_ad import *
from delete_ad import *
from RequestUtils import *

from tornado import ioloop, httpclient

from pprint import pprint
import urllib
from functools import partial

def handle_getad(catId, response):
    print("Finished getting category:", catId, "with code:", response.code)

async def get_ad_form(cookies, categoryId):
    url = 'https://www.kijiji.ca/p-post-ad.html?categoryId={0}'.format(categoryId)
    client = httpclient.AsyncHTTPClient()
    httpmethod = "GET"
    nativeCookies = { "Cookie": generate_cookie_str(cookies) }
    request = httpclient.HTTPRequest(url, method=httpmethod, headers=nativeCookies)
    return await client.fetch(request, partial(handle_getad, categoryId))

async def create_ad(s, categoryId):
    cookies = s.cookies.get_dict()
    response = await get_ad_form(cookies, categoryId)
    # r3 = requests.Request('GET', url)
    # prepped3 = s.prepare_request(r3)
    # resp3 = s.send(prepped3)
    html = lxml.html.fromstring(response.body).forms[0]

    parsed = parse_html(html)
    parsed = remove_empty(parsed)
    parsed['images']=['']
    parsed['uuid']=['']
    parsed['adId']=['']
    parsed['postAdForm.galleryImageIndex']=['']
    parsed['postAdForm.geocodeLat']=['45.4487283']
    parsed['postAdForm.geocodeLng']=['-75.67273650000004']
    parsed['postAdForm.city']=['Rockcliffe Park']
    parsed['postAdForm.province']=['ON']
    parsed['PostalLat']=['']
    parsed['PostalLng']=['']
    parsed['categoryId']=[str(categoryId)]
    parsed['postAdForm.locationId']=['1700185']
    parsed['postAdForm.mapAddress']=['Rockcliffe Park, ON K1M 0S6']
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
    parsed['file']=['']
    parsed['postAdForm.youtubeVideoURL']=['']
    parsed['location-fallback']=['k1m 0s6']
    parsed['postAdForm.phoneNumber']=['']
    parsed['featuresForm.topAdDuration']=['7']
    parsed['submitType']=['saveAndCheckout']

    postBody = urllib.parse.urlencode(parsed, doseq=True)
    return await send_create(cookies, postBody)

def handle_create(response):
    print("Finished creating")

async def send_create(cookies, data):
    client = httpclient.AsyncHTTPClient()
    httpmethod = "POST"
    url = "https://www.kijiji.ca/p-submit-ad.html"
    nativeCookies = { 'Content-Type': 'application/x-www-form-urlencoded',
            "Cookie": generate_cookie_str(cookies) }
    request = httpclient.HTTPRequest(url, method=httpmethod, body=data, headers=nativeCookies)
    response = await client.fetch(request, handle_create)
    if response.effective_url == "https://www.kijiji.ca/p-submit-ad.html":
        return (False, None)
    adId = urllib.parse.parse_qs(urllib.parse.urlparse(response.effective_url).query)['adId'][0]
    return (True, adId)


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


failed = []
async def createTestAndDelete(s, a):
    res = await create_ad(s, a)
    print(res)
    global failed
    if not res[0]:
        failed.append(a)
    else:
        await delete_ad(s, res[1])

            
# print("Num leaves:", num_of_leaves(), "Num nodes:", num_of_nodes())
async def main():
    catId = 10
    children = list(load_child_flat(catId))
    print("Num of leafs in category", catId, "is", len(children))

    s = login.new_session()
    for a in children:
        await createTestAndDelete(s, a)
    print("Failed catIds:", failed)


if __name__ == '__main__':
    ioloop.IOLoop.instance().run_sync(main)
# actuallyCreated = get_ads(s)
# print("Ads actually created is:", len(actuallyCreated))

# ads = get_ads()
# for ad in ads:
#     delete_ad(s, ad.id)
