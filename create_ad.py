import picture_upload

import requests
import lxml.html

import urllib
import re

ins2 = 'ca.kijiji.xsrf.token=1519509385722.f8cae3193431a507730199365629c5c279c40a80758128d64a6f555b853c2519&images=&images=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FNTM0WDgwMA%3D%3D%2Fz%2FNiIAAOSwqbxakeFj%2F%24_2.JPG&images=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FNTM0WDgwMA%3D%3D%2Fz%2FEOcAAOSw1jhakeZ4%2F%24_2.JPG&postAdForm.fraudToken=729b45ab464a4def8e36941cbb69cf93&uuid=&adId=&postAdForm.galleryImageIndex=0&postAdForm.geocodeLat=0.0&postAdForm.geocodeLng=0.0&postAdForm.city=&postAdForm.province=&PostalLat=&PostalLng=&categoryId=36&postAdForm.adType=OFFER&postAdForm.priceType=FIXED&postAdForm.priceAmount=500&postAdForm.attributeMap%5Bfurnished_s%5D=0&postAdForm.attributeMap%5Bpetsallowed_s%5D=0&postAdForm.title=asdf&postAdForm.description=onemanpunchblehbleh&postAdForm.addressStreetNumber=200&postAdForm.addressStreetName=Rideau+Street&postAdForm.addressCity=Ottawa&postAdForm.addressProvince=ON&postAdForm.addressPostalCode=K1N5Y1&postAdForm.locationId=1700185&locationLevel0=1700185&postAdForm.mapAddress=200+Rideau+Street%2C+Ottawa+K1N5Y1+ON&file=&postAdForm.youtubeVideoURL=&postAdForm.phoneNumber=&featuresForm.featurePackage=PKG_BASIC&file=&featuresForm.topAdDuration=7&submitType=saveAndCheckout'

def create_ad(s):
    r3 = requests.Request('GET', 'https://www.kijiji.ca/p-post-ad.html?categoryId=36')
    prepped3 = s.prepare_request(r3)
    resp3 = s.send(prepped3)
    html = lxml.html.fromstring(resp3.text)

    reg = re.compile("initialXsrfToken: '(.+?)'")
    match = reg.search(resp3.text).groups()[0]
    images = picture_upload.send_image_data(s, match)

    d = parse_html(html)
    inp = urllib.parse.parse_qs(ins2)
    inp['ca.kijiji.xsrf.token'] = d['ca.kijiji.xsrf.token'] 
    inp['images'] = images
    inp['postAdForm.fraudToken'] = d['postAdForm.fraudToken'] 
    inp['postAdForm.description'] = load_description()
    inp['postAdForm.title'] = load_title()
    inp['postAdForm.furnished_s'] = ['0']
    inp['postAdForm.petsallowed_s'] = ['0']
    inp['postAdForm.priceAmount'] = ['900']

    inpStr = urllib.parse.urlencode(inp, doseq=True)
    r4 = requests.Request('POST', 'https://www.kijiji.ca/p-submit-ad.html', data=inp)
    prepped4 = s.prepare_request(r4)
    prepped4.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    resp4 = s.send(prepped4)

    return urllib.parse.parse_qs(urllib.parse.urlparse(resp4.url).query)['adId'][0]

def create_ad2(s, copy):
    r3 = requests.Request('GET', 'https://www.kijiji.ca/p-post-ad.html?categoryId=36')
    prepped3 = s.prepare_request(r3)
    resp3 = s.send(prepped3)
    html = lxml.html.fromstring(resp3.text)

    reg = re.compile("initialXsrfToken: '(.+?)'")
    match = reg.search(resp3.text).groups()[0]

    d = parse_html(html)
    inp2 = urllib.parse.parse_qs(ins2)
    inp = urllib.parse.parse_qs(ins2)
    inp['ca.kijiji.xsrf.token'] = d['ca.kijiji.xsrf.token'] 
    inp['postAdForm.fraudToken'] = d['postAdForm.fraudToken'] 

    for k, v in inp.items():
        inp[k] = copy[k]

    inpStr = urllib.parse.urlencode(inp, doseq=True)
    r4 = requests.Request('POST', 'https://www.kijiji.ca/p-submit-ad.html', data=inp)
    prepped4 = s.prepare_request(r4)
    prepped4.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    resp4 = s.send(prepped4)

    return urllib.parse.parse_qs(urllib.parse.urlparse(resp4.url).query)['adId'][0]

def parse_html(html):
    r = {}
    for i in html.forms[0].xpath('//input'):
        if i.type == 'hidden':
            r[i.name] = i.value
        else:
            r[i.name] = "FILL IN"
    return r

def load_title():
    return ['200 Rideau Street - Room Available - Downtown, Great Location']

def load_description():
    return ["Hello!\n\nLooking for a roommate for a beautiful apartment at 200 Rideau street. I am leaving the room because my job is very far from the location but I've had no complaints with the situation. The apartment will be half furnished, the bedroom will be empty but the den and kitchen have a nice setup (that can be added to!).\n\nI won't list the amenities, the location speaks for itself. For a detailed description you can view the link below. This is the link provided by the building owner.\nhttp://www.condosottawa.com/Downtown/SandyHill/200RideauStreet\n\nFor a look at what the interior might look like, we are on the same floor as the room shown in the link below.\nhttp://sezlik.com/listings/condominium/Rideau_200_711\n\nThe room is available until October 2018.\nIf you are interested or need more info, please send me a text at 343-999-7028.\n\nCheers!\nDarius"]

