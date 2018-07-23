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
	this.evaluate(function() {
		var errorMessages = document.querySelector("label[class=error]");
		console.log(errorMessages)
		if(errorMessages.count != 0)
		{
			errorMessages.forEach(function(ele) {
				console.log("Found")
			});
		}
		else {
			console.log("No error messages found.")
		}
	});
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

