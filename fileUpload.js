
var http = require("http");

// 1st way of creating a http server
/*http.createServer(function(request, response) { 
	console.log("Request received")
	response.writeHead(200, {"Content-Type": "text/plain"}); 
	response.write("Hello World");
	response.end();
	console.log("Request completed")
}).listen(8888);
*/

//2nd way to create http server
/*
var http = require("http");
function onRequest(request, response) { response.writeHead(200, {"Content-Type": "text/plain"});
 	response.write("Hello World");
  	response.end();
}

http.createServer(onRequest).listen(8888);
*/



var server = require("./server");

server.start();
