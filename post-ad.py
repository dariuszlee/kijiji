import requests
import lxml.html

import urllib
import re

def create_ad():
    return None

def parse_html(html):
    r = {}
    for i in html.forms[0].xpath('//input'):
        if i.type == 'hidden':
            r[i.name] = i.value
        else:
            r[i.name] = "FILL IN"
    return r
