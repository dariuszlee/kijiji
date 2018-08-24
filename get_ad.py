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

def get_ads_sessStr(sessStr):
    headers = { 'Cookie' : sessStr}
    resp = requests.get('https://www.kijiji.ca/my/ads', headers=headers).json()['ads']
    parsed = [{a : b for a, b in y.items() if a in ['id', 'views', 'title']} for y in resp.values()]

    for ad in parsed:
        ad['page'] = get_ad_page_sessStr(sessStr, ad['id'])

    return parsed

def get_ad_page_sessStr(sessStr, adId):
    headers = { 'Cookie' : sessStr}
    url = 'https://www.kijiji.ca/my/ranks?ids={0}'.format(adId)
    resp = requests.get(url, headers=headers)
    respData = resp.json()['ranks'][str(adId)]
    return respData
    

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
