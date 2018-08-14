import requests
import lxml.html

import urllib
import re
import json

import login

from pprint import pprint

def create_ad(s, categoryId):
    r3 = requests.Request('GET', 'https://www.kijiji.ca/p-post-ad.html?categoryId=613')
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
            

children = load_child_categories(10)

s = login.new_session()
for c in children:
    create_ad(s, c)

ads = get_ads()
for ad in ads:
    delete_ad(s, ad.id)
