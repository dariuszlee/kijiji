import json
import requests

from login import login

def getCategoryData():
    with open('./data/categories.json') as jsonFile:
        return json.load(jsonFile)

def searchCategories():
    r = requests.get('https://www.kijiji.ca/j-select-category.json?categoryId=1')
    print(r.json())

def main():
    # s = requests.Session()
    # s = login.login(s)

    data = getCategoryData()
    searchCategories()
    

if __name__ == '__main__':
    main()
