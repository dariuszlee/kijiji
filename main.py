import requests

import time
import multiprocessing

import login
import delete_ad
import create_ad
import get_ad

def main():
    s = requests.Session()
    
    login.login(s)

    ads = get_ad.get_ads(s)
    adId = ads[0]['id']
    while True:
        if get_ad.get_ad_page(s, adId) > 1:
            delete_ad.delete_ad(s, adId)
            adId = create_ad.create_ad(s)

        time.sleep(60 * 30)

    print('Exiting')

if __name__ == '__main__':
    main()
