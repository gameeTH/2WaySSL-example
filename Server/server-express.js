var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express');

var port = 443;

var options = {
    key: fs.readFileSync('server-key.pem'),
    cert: fs.readFileSync('server-crt.pem'),
    ca: fs.readFileSync('ca-crt.pem'), 
    // request client certificate
    requestCert: true, 
    rejectUnauthorized: true
};

var app = express();

var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

app.post('/', function (req, res) {
    res.writeHead(200);
    console.log("called post")
    // console.log(Object.keys(req))
    console.log(req.headers)
    res.end("hello world\n");
});