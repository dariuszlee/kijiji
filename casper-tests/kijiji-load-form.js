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
	console.log("Searchign")
	if(this.exists('.error')){
		utils.dump(this.getElementsInfo('.error'))
	}
	else{
		console.log("Not Found")
	}
});

casper.run();

