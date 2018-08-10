var utils = require('utils')
var casper = require('casper').create({
	viewportSize : {
		width:1920,
		height : 1080
	},
	pageSettings : {
		userAgent : "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"
	}
});
var login = require('kijiji-login')

if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(search, this_len) {
		if (this_len === undefined || this_len > this.length) {
			this_len = this.length;
		}
		return this.substring(this_len - search.length, this_len) === search;
	};
}

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(search, pos) {
		return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
	};
}

casper.start();
login.tryLogin(casper)

casper.thenOpen('https://www.kijiji.ca/p-select-category.html')
	
casper.waitForUrl('https://www.kijiji.ca/p-select-category.html', function() {
	this.echo("Finished waiting for : " + this.getCurrentUrl())
});

casper.then(function(){
	this.wait(500, function(){
		var links = this.evaluate(function(){
			links = document.getElementsByTagName('script')
			return Array.prototype.map.call(links, function (e) {
				return e.getAttribute('src')
			});
		})
		links.forEach(function(e) { 
			if(e.endsWith('js'))
			{
				if(e.startsWith('//')){
					e = e.slice(2)
				}
				var resource = e.match("[\\w\\.]+\\.js$")
				var location = './casper-dump/'.concat(resource)
				casper.download(e, location)
			}
		})
	})
})

casper.run();
