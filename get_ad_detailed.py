import requests
import lxml.html

import urllib
from collections import defaultdict

import login
import get_ad
import create_ad

__ins2 = 'ca.kijiji.xsrf.token=1519509385722.f8cae3193431a507730199365629c5c279c40a80758128d64a6f555b853c2519&images=&images=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FNTM0WDgwMA%3D%3D%2Fz%2FNiIAAOSwqbxakeFj%2F%24_2.JPG&images=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FNTM0WDgwMA%3D%3D%2Fz%2FEOcAAOSw1jhakeZ4%2F%24_2.JPG&postAdForm.fraudToken=729b45ab464a4def8e36941cbb69cf93&uuid=&adId=&postAdForm.galleryImageIndex=0&postAdForm.geocodeLat=0.0&postAdForm.geocodeLng=0.0&postAdForm.city=&postAdForm.province=&PostalLat=&PostalLng=&categoryId=36&postAdForm.adType=OFFER&postAdForm.priceType=FIXED&postAdForm.priceAmount=500&postAdForm.attributeMap%5Bfurnished_s%5D=0&postAdForm.attributeMap%5Bpetsallowed_s%5D=0&postAdForm.title=asdf&postAdForm.description=onemanpunchblehbleh&postAdForm.addressStreetNumber=200&postAdForm.addressStreetName=Rideau+Street&postAdForm.addressCity=Ottawa&postAdForm.addressProvince=ON&postAdForm.addressPostalCode=K1N5Y1&postAdForm.locationId=1700185&locationLevel0=1700185&postAdForm.mapAddress=200+Rideau+Street%2C+Ottawa+K1N5Y1+ON&file=&postAdForm.youtubeVideoURL=&postAdForm.phoneNumber=&featuresForm.featurePackage=PKG_BASIC&file=&featuresForm.topAdDuration=7&submitType=saveAndCheckout'

__edit = 'ca.kijiji.xsrf.token=1520026426122.58038ed9f5b74262fde9eff2766ed185d04415a51583b6204747faa9c64c9da8&images=&images=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FNTY3WDg1MA%3D%3D%2Fz%2FjbIAAOSw7Wdamapb%2F%24_14.JPG&images=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FNTY3WDg1MA%3D%3D%2Fz%2FP1EAAOSwb-tamape%2F%24_14.JPG&images=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FNTY3WDg1MA%3D%3D%2Fz%2F1WMAAOSw63Namapg%2F%24_14.JPG&images=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FNTY3WDg1MA%3D%3D%2Fz%2F2d0AAOSwZyRamapi%2F%24_14.JPG&images=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FNTY2WDg1MA%3D%3D%2Fz%2FvWkAAOSwgltamapk%2F%24_14.JPG&images=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FNTY3WDg1MA%3D%3D%2Fz%2FwKYAAOSw1p1amapo%2F%24_14.JPG&images=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FNTY3WDg1MA%3D%3D%2Fz%2FY6oAAOSw%7E5Ramapq%2F%24_14.JPG&postAdForm.fraudToken=64eb85af2bcd9876505dfa9a65bc62db&uuid=&adId=1336921924&postAdForm.galleryImageIndex=&postAdForm.geocodeLat=45.4273499&postAdForm.geocodeLng=-75.68827759999999&postAdForm.city=Ottawa&postAdForm.province=ON&PostalLat=&PostalLng=&categoryId=36&postAdForm.locationId=1700185&postAdForm.priceType=FIXED&postAdForm.priceAmount=900&postAdForm.attributeMap%5Bfurnished_s%5D=0&postAdForm.attributeMap%5Bpetsallowed_s%5D=0&postAdForm.title=200+Rideau+Street+-+Room+Available+-+Downtown%2C+Great+Location&postAdForm.description=Hello%21%0D%0A%0D%0ALooking+for+a+roommate+for+a+beautiful+apartment+at+200+Rideau+street.+I+am+leaving+the+room+because+my+job+is+very+far+from+the+location+but+I%27ve+had+no+complaints+with+the+situation.+The+apartment+will+be+half+furnished%2C+the+bedroom+will+be+empty+but+the+den+and+kitchen+have+a+nice+setup+%28that+can+be+added+to%21%29.%0D%0A%0D%0AI+won%27t+list+the+amenities%2C+the+location+speaks+for+itself.+For+a+detailed+description+you+can+view+the+link+below.+This+is+the+link+provided+by+the+building+owner.%0D%0Ahttp%3A%2F%2Fwww.condosottawa.com%2FDowntown%2FSandyHill%2F200RideauStreet%0D%0A%0D%0AFor+a+look+at+what+the+interior+might+look+like%2C+we+are+on+the+same+floor+as+the+room+shown+in+the+link+below.%0D%0Ahttp%3A%2F%2Fsezlik.com%2Flistings%2Fcondominium%2FRideau_200_711%0D%0A%0D%0AThe+room+is+available+until+October+2018.%0D%0AIf+you+are+interested+or+need+more+info%2C+please+send+me+a+text+at+343-999-7028.%0D%0A%0D%0ACheers%21%0D%0ADarius&file=&postAdForm.youtubeVideoURL=&postAdForm.phoneNumber=&postAdForm.email=dariuszlee93%40gmail.com&featuresForm.featurePackage=PKG_BASIC&file=&featuresForm.bumpUpDuration=1&featuresForm.topAdDuration=7&submitType=saveAndCheckout'

def get_ad_detailed(sess, adId):
    url = 'https://www.kijiji.ca/p-edit-ad.html?adId={0}'.format(adId)
    r = requests.Request('GET', url)
    p = sess.prepare_request(r)
    resp = sess.send(p)
    html = lxml.html.fromstring(resp.text)

    md = defaultdict(list)
    for p in html.forms[0].xpath("//input"):
        if p.value != None and p.name != None:
            md[p.name].append(p.value)

    md['featuresForm.featurePackage'] = ['PKG_BASIC']
    md['featuresForm.topAdDuration'] = ['7']
    md['postAdForm.adType'] = ['OFFER']
    md['postAdForm.description'] = html.xpath("//textarea")[0].text
    address = [p.strip(' ') for p in md['postAdForm.mapAddress'][0].split(',')]
    md['postAdForm.addressStreetNumber'] = address[0].split(' ')[0]
    md['postAdForm.addressStreetName'] = address[0].split(' ')[1]
    md['postAdForm.addressCity'] = address[1]
    md['postAdForm.addressProvince'] = address[2].split(' ')[0]
    md['postAdForm.addressPostalCode'] = address[2].split(' ')[1] + address[2].split(' ')[2]

    inp = urllib.parse.parse_qs(__ins2)
    
    create_ad.create_ad2(sess, md)

    print("Got detailed ad")

if __name__ == '__main__':
    s = requests.Session()
    login.login(s, True)

    ads = get_ad.get_ads(s)
    if len(ads) != 0:
        detailed = get_ad_detailed(s, ads[0]['id'])
