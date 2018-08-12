var utils = require('utils')
var casper = require('casper').create();
var login = require('kijiji-login')

casper.start();

login.tryLogin(casper)

casper.thenOpen('https://www.kijiji.ca/p-admarkt-post-ad.html?categoryId=613&adTitle=asdfasdf')

casper.waitForUrl('https://www.kijiji.ca/p-admarkt-post-ad.html?categoryId=613&adTitle=asdfasdf', function() {
	this.echo("Finished waiting for: " + this.getCurrentUrl())
	this.evaluate(function() {
		var submitBut = document.querySelector("button[name^=saveAndCheckout]");
		if(submitBut != null)
		{
			submitBut.click()
		}
		else {
			console.log("Not Found")
		}
	});
});

casper.waitForSelector('.error', function() {
	var ele = this.getElementsInfo('.error')
	var newEles = ele.filter(function(e) { return e.attributes.name != undefined}).map(function(e){ return e.attributes.name })
	utils.dump(newEles)
});

casper.run();
