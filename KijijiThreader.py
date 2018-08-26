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

def start_program():
    KijijiAdGet.Run_Repost()
    ioloop.IOLoop.instance()
    loop.call_later(360, start_program)

if __name__ == "__main__":
    loop = ioloop.IOLoop.instance()
    t = Thread(target=start_loop, args=(loop,))
    t.start()

    loop.add_callback(start_program)

    s = input('Type "q" to quit:')
    while  s != "q":
        s = input('Type "q" to quit:')
    
    loop.add_callback(stop_loop)
