loginMod = { 
	tryLogin : function (casper) {
		casper.thenOpen('https://www.kijiji.ca/t-login.html', function() {
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
	}
}

module.exports = loginMod
