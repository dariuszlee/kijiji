var utils = require('utils')
var casper = require('casper').create();

casper.start().thenOpen('https://www.kijiji.ca/t-login.html', function() {
	this.echo("Login page reached")
});

casper.then(function() {
	this.evaluate(function() {
		document.getElementById("LoginEmailOrNickname").value="dariuszlee93@gmail.com";
		document.getElementById("login-password").value="spU7p9tR!";
		document.getElementById("SignInButton").click();
	});
});

casper.waitForUrl('https://www.kijiji.ca/?uli=true', function(){
	this.echo("Finished waiting for: " + this.getCurrentUrl())
})

casper.thenOpen('https://www.kijiji.ca/p-admarkt-post-ad.html?categoryId=613&adTitle=asdfasdf')

casper.waitForUrl('https://www.kijiji.ca/p-admarkt-post-ad.html?categoryId=613&adTitle=asdfasdf', function() {
	this.echo("Finished waiting for: " + this.getCurrentUrl())
	this.capture('signin.png')
});

// casper.waitForUrl('https://www.kijiji.ca/p-select-category.html', function(){
// 	this.echo("Finished waiting for: " + this.getCurrentUrl())
// 	this.capture('signin.png')
// })

// casper.then(function() {
// 	this.evaluate(function() {
// 		document.getElementByTagName('textarea').value="";
// 		document.getElementById("login-password").value="spU7p9tR!";
// 		document.getElementById("SignInButton").click();
// 	});
// });

casper.run();

