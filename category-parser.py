import json
import requests

from tornado import ioloop, httpclient
from functools import partial

def getCategoryHead():
    r = requests.get('https://www.kijiji.ca/j-select-category.json?categoryId=0')
    return r.json()['level1']['items']

def getAllNonLeaves(data):
    for d in data:
        if not d['leaf']:
            yield d

allCategories = dict()
def printLevelData(data, levelId):
    if levelId in allCategories.keys():
        allCategories[levelId] = allCategories[levelId] + data
    else:
        allCategories[levelId] = data

def handleNewData(data, levelId, parent):
    for i in data:
        i['parent'] = parent
    printLevelData(data, levelId)
    nonLeaves = getAllNonLeaves(data)
    for i in nonLeaves:
        handleNode(i, levelId)

num_requests = 0
def handle_request(levelId, catId, response):
    levelStr = 'level{0}'.format(levelId)
    data = json.loads(response.body)
    data = data[levelStr]['items']

    global num_requests
    num_requests = num_requests - 1
    handleNewData(data, levelId, catId)
    if num_requests == 0:
        ioloop.IOLoop.instance().stop()

http_client = httpclient.AsyncHTTPClient()
def handleNode(node, levelId):
    catId = node['categoryId']
    url = 'https://www.kijiji.ca/j-select-category.json?categoryId={0}'.format(catId)

    global num_requests 
    num_requests = num_requests + 1
    http_client.fetch(url, partial(handle_request, levelId + 1, catId), method='GET')

data = getCategoryHead()
handleNewData(data, 1, 0)

ioloop.IOLoop.instance().start()

with open('./data/all-categories.json', mode='w') as f:
    json.dump(allCategories, f)
