var http = require('http');
var fs = require('fs');


// readable streams
var myReadStream = fs.createReadStream(__dirname + '/README.md', 'utf8');

// writeable streams
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//piping from readStream to writeStream
myReadStream.pipe(myWriteStream);


// creating a server and piping the contents of file to response
http.createServer(function (req, res) {
    var myReadStream = fs.createReadStream(__dirname + '/README.md', 'utf8');
    myReadStream.pipe(res);
}).listen(8124, function() {
    console.log('bound to port 8124');
});






