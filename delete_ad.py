import requests
import lxml.html

def delete_ad(sess, adId):
    url = str('https://www.kijiji.ca/my/ad/{0}').format(adId)
    req = requests.Request('DELETE', url)
    prepped = sess.prepare_request(req)
    resp = sess.send(prepped)

    print('Deletion request returned with code: '+ str(resp.status_code))
