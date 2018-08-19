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

def delete_ad(sessStr, adId, callback):
    nativeCookies = { 'Cookie' : sessStr }
    client = httpclient.AsyncHTTPClient()
    url = str('https://www.kijiji.ca/my/ad/{0}').format(adId)
    method = "DELETE"
    request = httpclient.HTTPRequest(url, method='DELETE', headers=nativeCookies)
    client.fetch(request, partial(callback, adId ))

def handle_delete(adId, response):
    print("Deletion of ad:", adId, "returned with code: "+ str(response.code))
    global toDelete
    toDelete -= 1
    if toDelete == 0:
        ioloop.IOLoop.instance().stop()

def delete_all():
    print("Delete all ads")
    sess = new_session()
    sessStr = get_session_str(sess)

    ads = get_ad.get_ads(sess)
    global toDelete
    toDelete = len(ads)
    if not toDelete == 0:
        for ad in ads:
            print(ad)
            delete_ad(sessStr, ad['id'], handle_delete)
    else:
        ioloop.IOLoop.instance().stop()

if __name__ == '__main__':
    delete_all()
    ioloop.IOLoop.instance().start()
