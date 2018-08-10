var data = require('./data/categories')
var fs = require('fs')

var dataAsString = JSON.stringify(data)
console.log(dataAsString)
fs.writeFile('./data/categories.json', dataAsString, function(err) {	
	if(err){
		console.log(err)
	}
})
