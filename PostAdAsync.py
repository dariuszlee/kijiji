from functools import partial

import login
import RequestUtils
import KijijiCategories

from tornado import ioloop, httpclient

created = 0
def handle_delete():
    global created
    created -= created

def handle_getad(categoryId, sessionStr, response):
    print("Finished getting category:", categoryId, "with code:", response.code)

def get_ad(categoryId, sessionStr):
    url = 'https://www.kijiji.ca/p-post-ad.html?categoryId={0}'.format(categoryId)
    client = httpclient.AsyncHTTPClient()
    httpmethod = "GET"
    nativeCookies = { "Cookie": sessionStr }
    request = httpclient.HTTPRequest(url, method=httpmethod, headers=nativeCookies)
    client.fetch(request, partial(handle_getad, categoryId, sessionStr))

def main(session):
    catId = 10
    children = KijijiCategories.load_child_flat(catId)
    for c in children:
        get_ad(c, session)

if __name__ == '__main__':
    session = login.new_session()
    cookiesStr = RequestUtils.get_session_str(session)
    main(cookiesStr)
    ioloop.IOLoop.instance().start()
