var http = require('http'); 
var fs = require('fs');
// write out numbers 
function checkRegularExpression(res) {
	var ssRe = /^\d{3}-\d{2}-\d{4}$/; 
	res.write(ssRe.test('555-55-5555').toString());
    var decRe = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/; 
	res.write(decRe.test(56.5).toString());
	res.end();
}
// create http server 
http.createServer(function (req, res) {
	//var query = require('url').parse(req.url).query;
	//var app = require('querystring').parse(query).file + ".txt";
	// content header
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// write out numbers 
	checkRegularExpression(res);
}).listen(8124);
console.log('Server running at 8124');