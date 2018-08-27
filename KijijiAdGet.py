from copy import copy
from functools import partial

from tornado import ioloop, httpclient
import lxml

from RequestUtils import get_session
from KijijiGlobal import KijijiGlobal
from PostAdAsync import get_ad, Create_Callbacks
from delete_ad import delete_ad
from get_ad import get_ads_sessStr

class KijijiAdGet:
    def __init__(self, sessStr):
        self.Session = sessStr
        self.IsRunning = False
        self.RequestsRunning = set()

    def Run_Repost():
        sess = get_session()
        ads = [ str(f['id']) for f in get_ads_sessStr(sess) if f['page'] > 1]
        print("Reposting:", ads)
        adGetter = KijijiAdGet(sess)
        adGetter.RepostAds(ads)
    

    def RepostAds(self, adIds):
        if type(adIds) == str:
            adIds = [adIds]
        elif type(adIds) != list:
            raise TypeError("Please pass a single string or list of strings")

        print("Reposting these ads:", adIds)
        for ad in adIds:
            if type(ad) != str:
                raise TypeError("Please pass a single string or list of strings")
            self.__RepostAd(ad)

        self.IsRunning = True
        # if ioloop.IOLoop.instance(Vj
        # ioloop.IOLoop.instance().start()

    def __RepostAd(self, adId):
        if self.IsRunning == True:
            print("Already running...")
        self.RequestsRunning.add(adId)

        url = 'https://www.kijiji.ca/p-edit-ad.html?adId={0}'.format(adId)
        client = httpclient.AsyncHTTPClient()
        httpmethod = "GET"
        nativeCookies = { "Cookie": self.Session }
        request = httpclient.HTTPRequest(url, method=httpmethod, headers=nativeCookies)
        client.fetch(request, partial(self.__readResponse, adId))

    def RepostAd(self, adId):
        self.__RepostAd(adId)

    def __OnFinish(self, adId):
        self.RequestsRunning.remove(adId)
        # if len(self.RequestsRunning) == 0:
            # ioloop.IOLoop.instance().stop()
    
    def __OnSuccessDelete(self, adId, response):
        print("Deletion of ad:", adId, "returned with code: "+ str(response.code))
        self.__OnFinish(adId)

    
    def __OnSuccessRepost(self, previousId, sessionStr, adId):
        print("Successfully reposted with new id:", adId)
        print("Now try and delete old ad:", previousId)
        delete_ad(sessionStr, previousId, self.__OnSuccessDelete)

    def __readResponse(self, prevAdId, response):
        print("Response received:")
        if response.code >= 400:
            self.__readCurrentAdFailed(prevAdId, response)
        respBody = response.body.decode('utf-8', 'ignore')
        html = lxml.html.fromstring(respBody).forms[0]
        fields = self.__buildRequestFields(html)
        cbs = Create_Callbacks()
        cbs['OnSuccessCreate'] = partial(self.__OnSuccessRepost, prevAdId)

        get_ad(fields['categoryId'][0], self.Session, fields, cbs)

    def __readCurrentAdFailed(self, prevAdId, response):
        print("Failed with error code:", response.code)
        print("Error is:", response.error)
        self.__OnFinish(prevAdId)

    def __buildRequestFields(self, html):
        fields = copy(KijijiGlobal().BuySellFields)
        for i in html.forms[0].xpath('//*[@name]'):
            fieldName = i.get('name')
            if fieldName in fields:
                inputType = i.get('type')
                tagType = i.tag
                if inputType == 'radio' and i.get('checked') == None:
                    continue
                elif tagType == 'textarea':
                    fields[fieldName] = [i.text_content()]
                else:
                    fieldValue = i.get('value')
                    if i.get('value') != None:
                        if fieldName == 'images':
                            fields[fieldName] = fields[fieldName] + [i.get('value')]
                        else:
                            fields[fieldName] = [fieldValue]
        return fields

if __name__ == "__main__":
    sess = get_session()
    getter = KijijiAdGet(sess)
    getter.RepostAd(1379599031)
    ioloop.IOLoop.instance().start()
