import json
from pprint import pprint

def PrintAsTree():
    return 0

with open('./data/all-categories.json', mode='r') as f:
    data = json.load(f)
    pprint(data)

de
