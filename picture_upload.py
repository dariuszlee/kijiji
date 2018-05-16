import requests
import json

import login

__pics = ['BAi-mOW-KICe_850x565_XWy4HxB1.jpg',
            'UxckEH-DDEvG_850x565_XWy4HxB1.jpg',
            'hNQ1JzZbggDP_850x565_XWy4HxB1.jpg',
            'ypiEjRnCKKbT_850x565_XWy4HxB1.jpg',
            'Q8GUAU1dpWJS_850x565_XWy4HxB1.jpg',
            'ZdCtuC-2Cfe__850x565_XWy4HxB1.jpg',
            'qTK0vinh0GQz_850x565_XWy4HxB1.jpg']

def send_image_data(sess, token):
    pic_urls = []
    for pic in __pics:
        picUri = './pics/' + pic
        dic = {'file' : (pic, 
                        open(picUri, 'rb'),
                        'image/jpeg') }
        req = requests.Request('POST', 'https://www.kijiji.ca/p-upload-image.html', files=dic)
        preppedReq = sess.prepare_request(req)
        preppedReq.headers['x-ebay-box-token'] = token

        resp = sess.send(preppedReq)
        pic_urls.append(resp.json()['normalUrl'])
    return pic_urls

if __name__ == '__main__':
    sess = requests.Session()
    login.login(sess)
    send_image_data(sess)
