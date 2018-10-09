from threading import Thread
from tornado import ioloop, httpclient

from KijijiAdGet import KijijiAdGet

def start_loop(loop):
    loop.start()

def stop_loop():
    loop = ioloop.IOLoop.instance()
    loop.stop()

def handle_cb(response):
    print("Response Received:")

def test_response(response):
    raise_exception()

def test_call():
    url = 'https://www.kijiji.ca/'
    client = httpclient.AsyncHTTPClient()
    httpmethod = "GET"
    request = httpclient.HTTPRequest(url, method=httpmethod)
    client.fetch(request, test_response)

def start_program():
    try:
        KijijiAdGet.Run_Repost()
    finally:
        ioloop.IOLoop.instance()
        loop.call_later(360, start_program)

def raise_exception():
    raise Exception("Asdfasdf")

if __name__ == "__main__":
    loop = ioloop.IOLoop.instance()

    t = Thread(target=start_loop, args=(loop,))
    t.start()

    loop.add_callback(start_program)

    s = input('Type "q" to quit:')
    while  s != "q":
        s = input('Type "q" to quit:')
    
    loop.add_callback(stop_loop)
