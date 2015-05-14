
//// Hello World HTTP server
//// Load the http module to create an http server.
//var http = require('http');
//
//// Configure our HTTP server to respond with Hello World to all requests.
//var server = http.createServer(function (request, response) {
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.end("Hello World\n");
//});
//
//// Listen on port 3030, IP defaults to 127.0.0.1
//server.listen(3030);
//
//// Put a friendly message on the terminal
//console.log("Server running at http://127.0.0.1:3030/");


//// Hello World Express Server
//var express = require('express');
//var app = express();
//
//app.get('/', function (req, res) {
//    res.send('Hello World!');
//});
//
//var server = app.listen(3030, function () {
//
//    var host = server.address().address;
//    var port = server.address().port;
//
//    console.log('Example app listening at http://%s:%s', host, port);
//
//});

//// Hello World Static File Express Server
//var express = require('express');
//var app = express();
//
//app.use(express.static('public'));
//
//var server = app.listen(3030, function () {
//
//    var host = server.address().address;
//    var port = server.address().port;
//
//    console.log('Example app listening at http://%s:%s', host, port);
//
//});


// Hello World Static File Express Server with etag false
var express = require('express');
var app = express();
var serveStatic = require('serve-static');

app.use(serveStatic('public',{ etag: false }));

var server = app.listen(3030, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});