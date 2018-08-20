#!/bin/bash

phantomBin=$(pwd)/phantomjs-2.1.1-linux-x86_64/bin
if [[ -d $phantomBin ]];then
	PATH=$PATH:$(pwd)/phantomjs-2.1.1-linux-x86_64/bin
fi
PATH=$PATH:$(pwd)/node_modules/.bin:

./node_modules/casperjs/bin/casperjs --ssl-protocol=any --ignore-ssl-errors=yes --cookies-file=./casper-tests/cookies.txt ./casper-tests/kijiji-load-form.js

