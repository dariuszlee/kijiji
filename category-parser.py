import json
import requests
import pprint

from login import login

import asyncio
import concurrent.futures

def getCategoryData():
    with open('./data/categories.json') as jsonFile:
        return json.load(jsonFile)

def getCategoryHead():
    r = requests.get('https://www.kijiji.ca/j-select-category.json?categoryId=0')
    return r.json()['level1']['items']

def lvlOnlyLeaves(lvlData):
    for d in lvlData:
        if not d['leaf']:
            return False
    return True

def getNextLevel(curLvl, curData):
    lvlString = 'level{0}'.format(curLvl+1)
    allLvlData = []
    for d in curData:
        if not d['leaf']:
            url = 'https://www.kijiji.ca/j-select-category.json?categoryId={0}'.format(d['categoryId'])
            r = requests.get(url)
            try:
                allLvlData = allLvlData + r.json()[lvlString]['items']
            except:
                print("Error dealing with ", d['name'])
                print(url)
                print(r.json())
            finally:
                print("Finished dealing with ", d['name'])
    return allLvlData

# s = requests.Session()
# s = login(s)

# allCategories = dict()

# lvl = 0
# allCategories[lvl] = getCategoryHead()
# while not lvlOnlyLeaves( allCategories[lvl] ):
#     lvl += 1
#     allCategories[lvl] = getNextLevel(lvl, allCategories[lvl - 1])
#     print(lvl)

async def getCategoryData(catId):
    url = 'https://www.kijiji.ca/j-select-category.json?categoryId={0}'.format(catId)
    r = requests.get(url)

def getAllNodes(data):
    for d in data:
        if not d['leaf']:
            yield d
            
async def getNodeData(node):
    await getCategoryData(node['categoryId'])
    print(node['name'])

async def getAllData():
    print("Starting collection")
    data = getCategoryHead()
    nodes = list(getAllNodes(data))
    for n in nodes:
        await getNodeData(n)

    # with concurrent.futures.ThreadPoolExecutor(max_worker=20) as executor:
    #     loop = asyncio.get_event_loop()
    #     futures = [
    #         loop.run.
    #     ]

loop = asyncio.get_event_loop()
loop.run_until_complete(getAllData())

# allCategories = { 'level1' : [], 'level2' : [], 'level3': [], 'level4' : []}
# allCategories['level1'] = getLevel1CategoriesUrl()
# for i in allCategories['level1']:
#     print(i['name'])
#     allCategories['level2'] = allCategories['level2'] + getLevelCategoriesUrl(i['categoryId'])

# for i in allCategories['level2']:
#     if not i['leaf']:
#         print('Searching: ' + i['name'])
#         allCategories['level3'] = allCategories['level3'] + getLevelCategoriesUrl(i['categoryId']) 

# for i in allCategories['level3']:
#     if not i['leaf']:
#         print('Searching: ' + i['name'])
#         allCategories['level4'] = allCategories['level4'] + getLevelCategoriesUrl(i['categoryId']) 

# with open('./data/all-categories.json', mode='w') as jsonFile:
#     json.dump(allCategories, jsonFile)
