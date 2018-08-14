import requests
import lxml.html

import get_ad
import login

from tornado import ioloop, httpclient

def delete_ad(sess, adId):
    url = str('https://www.kijiji.ca/my/ad/{0}').format(adId)
    req = requests.Request('DELETE', url)
    prepped = sess.prepare_request(req)
    resp = sess.send(prepped)

def handle_delete(resp):
    print('Deletion request returned with code: '+ str(resp.status_code))

if __name__ == '__main__':
    print("Delete all ads")

    sess = login.new_session()
    ads = get_ad.get_ads(sess)
    for ad in ads:
        print(ad)
        delete_ad(sess, ad['id'])
        http_client.fetch(url, partial(handle_request, levelId + 1, catId), method='GET')

    ioloop.IOLoop.instance().start()
