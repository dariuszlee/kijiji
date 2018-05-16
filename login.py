import requests
import lxml.html
import urllib
import getpass

def login(s, easyLogin=True):
    r = requests.Request('GET', 'https://www.kijiji.ca/t-login.html')
    prepped = s.prepare_request(r)

    loginInfo = __get_login(easyLogin)

    resp = s.send(prepped)
    html = lxml.html.fromstring(resp.text)
    dataDict = {'ca.kijiji.xsrf.token' : html.xpath('//input[@name="ca.kijiji.xsrf.token"]/@value')[0],
                'targetUrl' : html.xpath('//input[@name="targetUrl"]/@value')[0],
                'emailOrNickname' : loginInfo['userName'], 
                'password' : loginInfo['password'],
                'rememberMe' : 'true', '_rememberMe' : 'on' }

    dataStr = urllib.parse.urlencode(dataDict, doseq=True)
    r2 = requests.Request('POST', 'https://www.kijiji.ca/t-login.html', data=dataStr)
    prepped2 = s.prepare_request(r2)
    prepped2.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    resp2 = s.send(prepped2)

    return __is_successful_login(resp2)

# Check if we've been redirected?
def __is_successful_login(resp):
    if resp.url == 'https://www.kijiji.ca/t-login.html':
        raise Exception("Login was not successful")

# not save, too lazy
def __get_login(easy):
    info = dict()
    if easy:
        info['userName'] = 'dariuszlee93@gmail.com'
        info['password'] = 'spU7p9tR!'
    else:
        info['userName'] = input('Enter kijiji user name: ')
        info['password'] = getpass.getpass('Enter kijiji password: ') 
    return info

if __name__ == '__main__':
    session = requests.Session()
    login(session)
