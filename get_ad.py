import requests
import lxml.html

import login

def get_ads(sess):
    r = requests.Request('GET', 'https://www.kijiji.ca/my/ads')
    p = sess.prepare_request(r)
    resp = sess.send(p).json()['ads']
    parsed = [{a : b for a, b in y.items() if a in ['id', 'views', 'title']} for y in resp.values()]

    for ad in parsed:
        ad['page'] = get_ad_page(sess, ad['id'])

    return parsed

def get_ad_page(sess, adId):
    url = 'https://www.kijiji.ca/my/ranks?ids={0}'.format(adId)
    r = requests.Request('GET', url)
    p = sess.prepare_request(r)
    return sess.send(p).json()['ranks'][str(adId)]

if __name__ == '__main__':
    s = requests.Session()
    login.login(s, True)
    ads = get_ads(s)
    print(ads)
