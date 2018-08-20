var utils = require('utils')
var casper = require('casper').create();
var login = require('kijiji-login')

casper.start();
casper.on("page.error", function(msg, trace) {
    this.echo("Error: " + msg);
});

login.tryLogin(casper)

function testPage(casper, catId, addToGlobal)
{
	var allAttributes = []

	const url = "https://www.kijiji.ca/p-admarkt-post-ad.html?categoryId=" + catId
	casper.thenOpen(url)
	casper.waitForUrl(url, function() {
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
		var newEles = ele.filter(function(e) { return e.attributes.name != undefined}).map(function(e){ 
			return { 'Name': e.attributes.name, 'Value': e.attributes.value}
		})
		var moreEles = this.evaluate(function() {
			var eles = document.querySelectorAll('.error')
			filtered = [].filter.call(eles, function(ele){
				return ele.localName === 'select'
			}).map(function(ele){
				var children = [].filter.call(ele.children, function(e){
					return e.localName === 'option' && e.value !== ""
				}).map(function(e) {
					return e.value
				})

				var retValue = [ele.name, children]
				return retValue
			})

			return filtered
		});
		moreEles.forEach(function(e){allAttributes.push(e)})

		var radioButtons = this.evaluate(function() {
			var eles = document.querySelectorAll('.error')
			var radios = [].filter.call(eles, function(ele){
				return ele.localName === 'input' && ele.type === 'radio'
			}).map(function(ele){
				return { FieldName : ele.name, Value : ele.value }
			})
			var filtered = {}
			radios.forEach(function(e){
				if(!(e.FieldName in filtered))
				{
					filtered[e.FieldName] = [e.Value]
				}
				else {
					var res = filtered[e.FieldName]
					res.push(e.Value)
				}
			})

			return filtered
		});
		for(r in radioButtons){
			allAttributes.push([r, radioButtons[r]])
		}

		addToGlobal(catId, allAttributes)
	});
}

var allData = {}
function addTo(catId, data){
	allData[catId] = data
}

// const failed = [12]
const failed = [12, 646, 772, 776, 773, 782, 760]
// const failed = [646]
failed.forEach(function(e){
	attributes = testPage(casper, e, addTo)
})

casper.on('run.complete', function(){
    utils.dump(allData)
	allDataToStr = JSON.stringify(allData)
	// fs.writeFile('./failed-categories-missing.json', allDataToStr, function(e){
	// 	if (e) throw e;
	// 	console.log('The file has been saved!');
	// })
	var fs = require('fs')
	fs.write('./data/failed-data-fields.json', allDataToStr, 'w')
})

casper.run();
