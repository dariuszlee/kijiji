var utils = require('utils')
var casper = require('casper').create();
var login = require('kijiji-login')

casper.start();

login.tryLogin(casper)

casper.thenOpen('https://www.kijiji.ca/p-select-category.html', function(){
});

casper.run();
