import urllib.parse
import lxml
import copy
from functools import partial

from tornado import ioloop, httpclient

import login
import RequestUtils
import PostAdAsync

categoryId = 613

parsed = dict()
parsed['images']=['']
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

session = login.new_session()
sessionStr = RequestUtils.get_session_str(session)
client = httpclient.AsyncHTTPClient()
httpmethod = "POST"
url = "https://www.kijiji.ca/p-submit-ad.html"
nativeCookies = { 'Content-Type': 'application/x-www-form-urlencoded',
        "Cookie": sessionStr}

necessary = []
toCheck = len(parsed.keys())
def handle_create(field, isNec):
    print("Failed field is :", field)
    necessary.append(field)
    ioloop.IOLoop.instance().stop()

print("Testing", len(parsed), "items.")
for k in parsed.items():
    print("Testing value:", k[0])
    newParsed = {}
    newParsed[k[0]] = ['']
    PostAdAsync.get_ad(613, sessionStr, newParsed, partial(handle_create, k[0]))
    ioloop.IOLoop.instance().start()

print(necessary)
