import requests
import lxml.html

import get_ad
import login

from tornado import ioloop, httpclient
from http.cookies import SimpleCookie

from RequestUtils import *
from functools import partial

# def delete_ad(sess, adId):
#     url = str('https://www.kijiji.ca/my/ad/{0}').format(adId)
    # req = requests.Request('DELETE', url)
    # prepped = sess.prepare_request(req)
    # resp = sess.send(prepped)

async def delete_ad(sess, adId):
    nativeCookies = generate_cookies(sess.cookies.get_dict())
    client = httpclient.AsyncHTTPClient()
    url = str('https://www.kijiji.ca/my/ad/{0}').format(adId)
    method = "DELETE"
    request = httpclient.HTTPRequest(url, method='DELETE', headers=nativeCookies)
    await client.fetch(request, partial(handle_delete, adId))

def handle_delete(adId, response):
    print("Deletion of ad:", adId, "returned with code: "+ str(response.code))

async def delete_all():
    print("Delete all ads")
    sess = login.new_session()
    cookies = sess.cookies.get_dict()
    nativeCookies  = generate_cookies(cookies)

    client = httpclient.AsyncHTTPClient()
    ads = get_ad.get_ads(sess)
    for ad in ads:
        url = str('https://www.kijiji.ca/my/ad/{0}').format(ad['id'])
        request = httpclient.HTTPRequest(url, method='DELETE', headers=nativeCookies)
        print(request)
        await client.fetch(request, handle_delete)

if __name__ == '__main__':
    ioloop.IOLoop.instance().run_sync(delete_all)
