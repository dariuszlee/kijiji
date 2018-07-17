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

casper.thenOpen('https://www.kijiji.ca/p-post-ad.html?categoryId=12&adTitle=asdfasdf', function() {
	this.capture("adcreate.png")
});

casper.run();

