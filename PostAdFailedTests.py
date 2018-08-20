import json

import PostAdAsync
import RequestUtils
import delete_ad

from tornado import ioloop, httpclient

# with open('./data/failed-creates.json', 'r') as f:
#     with open('./data/all-categories-flat.json', 'r') as flatFile:
#         sess = RequestUtils.get_session()
#         allData = json.load(flatFile)
#         data = json.load(f)
#         for d in data:
#             PostAdAsync.get_ad(d, sess)
#         ioloop.IOLoop.instance().start()
#         delete_ad.delete_all()

# newFailed = copy.copy(PostAdAsync.failed)
# PostAdAsync.failed = []
        
sessionStr = RequestUtils.get_session()
failed = [12, 646, 772, 776, 773, 782, 760]
with open('./data/failed-data-fields.json', 'r') as failedFieldFile:
    failedFields = json.load(failedFieldFile)
    for d in failed:
        PostAdAsync.get_ad(d, sessionStr, None)
ioloop.IOLoop.instance().start()
# with open('./data/all-categories-flat.json', 'r') as flatFile:
#     allData = json.load(flatFile)
#     for d in failed:
#         print(allData[str(d)])
