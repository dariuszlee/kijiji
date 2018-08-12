import json
import requests
import pprint

from login import login

def getCategoryData():
    with open('./data/categories.json') as jsonFile:
        return json.load(jsonFile)

def getLevel1CategoriesUrl():
    r = requests.get('https://www.kijiji.ca/j-select-category.json?categoryId=0')
    return r.json()['level1']['items']

def getLevelCategoriesUrl(catId):
    url = 'https://www.kijiji.ca/j-select-category.json?categoryId={0}'.format(catId)
    r = requests.get(url)
    return r.json()['level2']['items']

# s = requests.Session()
# s = login.login(s)
allCategories = { 'level1' : [], 'level2' : [], 'level3': [], 'level4' : []}
allCategories['level1'] = getLevel1CategoriesUrl()
for i in allCategories['level1']:
    print(i['name'])
    allCategories['level2'] = allCategories['level2'] + getLevelCategoriesUrl(i['categoryId'])

for i in allCategories['level2']:
    if not i['leaf']:
        print('Searching: ' + i['name'])
        allCategories['level3'] = allCategories['level3'] + getLevelCategoriesUrl(i['categoryId']) 

for i in allCategories['level3']:
    if not i['leaf']:
        print('Searching: ' + i['name'])
        allCategories['level4'] = allCategories['level4'] + getLevelCategoriesUrl(i['categoryId']) 

with open('./data/all-categories.json', mode='w') as jsonFile:
    json.dump(allCategories, jsonFile)
