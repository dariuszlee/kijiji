import requests
import lxml.html

import urllib
import re
import json

import login
from get_ad import *
from delete_ad import *

from tornado import ioloop, httpclient

from pprint import pprint
import urllib

def create_ad(s, categoryId):
    url = 'https://www.kijiji.ca/p-post-ad.html?categoryId={0}'.format(categoryId)
    r3 = requests.Request('GET', url)
    prepped3 = s.prepare_request(r3)
    resp3 = s.send(prepped3)
    html = lxml.html.fromstring(resp3.text).forms[0]

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
    r4 = requests.Request('POST', 'https://www.kijiji.ca/p-submit-ad.html', data=postBody)
    prepped4 = s.prepare_request(r4)
    prepped4.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    resp4 = s.send(prepped4)
    if resp4.url == "https://www.kijiji.ca/p-submit-ad.html":
        return (False, None)
    adId = urllib.parse.parse_qs(urllib.parse.urlparse(resp4.url).query)['adId'][0]
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

def load_child_categories(catId):
    with open('./data/all-categories.json', 'r') as f:
        data = json.load(f)
        for d in data.values():
            for ind in d:
                if ind['parent'] == catId and ind['leaf']:
                    yield ind['categoryId']

def num_of_leaves():
    with open('./data/all-categories-flat.json', 'r') as f:
        data = json.load(f)
        numLeaves = 0
        for d in data.values():
            if d['leaf']:
                numLeaves += 1
        return numLeaves

def num_of_nodes():
    with open('./data/all-categories-flat.json', 'r') as f:
        data = json.load(f)
        numNodes = 0
        for d in data.values():
            if not d['leaf']:
                numNodes += 1
        return numNodes

def load_child_flat(catId):
    with open('./data/all-categories-flat.json', 'r') as f:
        data = json.load(f)
        for d in data.values():
            if d['leaf'] and isLeafChildOf(data, d['categoryId'], catId):
                yield d['categoryId']

def isLeafChildOf(data, leafId, catId):
    if leafId == 0:
        return False
    elif leafId == catId:
        return True
    else:
        return isLeafChildOf(data, data[str(leafId)]['parent'], catId)

failed = []
async def createTestAndDelete(s, a):
    res = create_ad(s, a)
    print(res)
    global failed
    if not res[0]:
        failed.append(a)
    else:
        delete_ad(s, res[1])

            
# print("Num leaves:", num_of_leaves(), "Num nodes:", num_of_nodes())
async def main():
    catId = 10
    children = list(load_child_flat(catId))
    print("Num of leafs in category", catId, "is", len(children))

    s = login.new_session()
    children = [12, 613]
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
