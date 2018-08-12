var loginMod = { 
	tryLogin : function (casper) {
		casper.thenOpen('https://www.kijiji.ca/t-login.html', function() {
			this.evaluate(function() {
				document.getElementById("LoginEmailOrNickname").value="dariuszlee93@gmail.com";
				document.getElementById("login-password").value="spU7p9tR!";
				document.getElementById("SignInButton").click();
			});
		});

		casper.then(function() {
			casper.wait(2000, function(){
				if(this.getCurrentUrl() === 'https://www.kijiji.ca/?uli=true'){
					this.echo("New login session")
				}
				else {
					this.echo("Current url is: " + this.getCurrentUrl())
				}
			})
		})
	}
}

module.exports = loginMod
