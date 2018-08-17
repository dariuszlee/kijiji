import requests
import lxml.html

import get_ad
import login

from tornado import ioloop, httpclient
from http.cookies import SimpleCookie

def delete_ad(sess, adId):
    url = str('https://www.kijiji.ca/my/ad/{0}').format(adId)
    req = requests.Request('DELETE', url)
    prepped = sess.prepare_request(req)
    resp = sess.send(prepped)

def handle_delete(resp):
    print('Deletion request returned with code: '+ str(resp.code))

def generate_cookies(cookies):
    cookieStr = ""
    for cookie in cookies.items():
        cookieStr += cookie[0] + "=" + cookie[1] + "; "

    return {"Cookie": cookieStr}

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
