import json
import requests

from tornado import ioloop, httpclient
from functools import partial

def load_child_categories(catId):
    with open('./data/all-categories.json', 'r') as f:
        data = json.load(f)
        for d in data.values():
            for ind in d:
                if ind['parent'] == catId and ind['leaf']:
                    yield ind['categoryId']

def num_of_leaves():
    with open('./data/all-categories-flat.json', 'r') as f:
        data = json.load(f)
        numLeaves = 0
        for d in data.values():
            if d['leaf']:
                numLeaves += 1
        return numLeaves

def num_of_nodes():
    with open('./data/all-categories-flat.json', 'r') as f:
        data = json.load(f)
        numNodes = 0
        for d in data.values():
            if not d['leaf']:
                numNodes += 1
        return numNodes

def load_child_flat(catId):
    with open('./data/all-categories-flat.json', 'r') as f:
        data = json.load(f)
        for d in data.values():
            if d['leaf'] and isLeafChildOf(data, d['categoryId'], catId):
                yield d['categoryId']

def isLeafChildOf(data, leafId, catId):
    if leafId == 0:
        return False
    elif leafId == catId:
        return True
    else:
        return isLeafChildOf(data, data[str(leafId)]['parent'], catId)

def getCategoryHead():
    r = requests.get('https://www.kijiji.ca/j-select-category.json?categoryId=0')
    return r.json()['level1']['items']

def getAllNonLeaves(data):
    for d in data:
        if not d['leaf']:
            yield d

allCategories = dict()
allCategoriesDict = dict()
def printDataFlat(data):
    for d in data:
        allCategoriesDict[int(d['categoryId'])] = d

def printLevelData(data, levelId):
    if levelId in allCategories.keys():
        allCategories[levelId] = allCategories[levelId] + data
    else:
        allCategories[levelId] = data

def handleNewData(data, levelId, parent):
    for i in data:
        i['parent'] = parent
    printLevelData(data, levelId)
    printDataFlat(data)
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

if __name__ == '__main__':
    data = getCategoryHead()
    handleNewData(data, 1, 0)

    ioloop.IOLoop.instance().start()

    with open('./data/all-categories.json', mode='w') as f:
        json.dump(allCategories, f)

    with open('./data/all-categories-flat.json', mode='w') as f:
        json.dump(allCategoriesDict, f)
