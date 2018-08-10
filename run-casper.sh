#!/bin/bash

phantomBin=$(pwd)/phantomjs-2.1.1-linux-x86_64/bin
if [[ -d $phantomBin ]];then
	PATH=$PATH:$(pwd)/phantomjs-2.1.1-linux-x86_64/bin
fi

./node_modules/casperjs/bin/casperjs --ssl-protocol=any --ignore-ssl-errors=yes ./casper-tests/kijiji-scrape-urls.js
