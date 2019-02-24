var http = require('http');
var fs = require('fs');


// readable streams
var myReadStream = fs.createReadStream(__dirname + '/README.md', 'utf8');

// writeable streams
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//reading from stream
myReadStream.on('data', function(chunk){
    console.log('new chunk recevied');
    console.log(chunk);

    //writing to stream
    myWriteStream.write(chunk);
});






