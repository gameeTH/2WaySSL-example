var req = require('request');
// var req = request.defaults();
var fs = require('fs');

const caFile = 'ca-crt.pem'
const certificateFile = 'client1-crt.pem'
const keyFile = 'client1-key.pem'
const data = 'Hello World!'
req.post({
    uri: 'https://localhost',
    key: fs.readFileSync(keyFile),
    cert: fs.readFileSync(certificateFile),
    ca: fs.readFileSync(caFile),
    requestCert: true, 
    rejectUnauthorized: true,
    headers: {
        'Content-Type': 'plain/text',
    //     'Accept': 'application/json',
    //     // 'Authorization': 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
    },
    body: data
}, function (error, res, body) {
    // console.log(response)
    console.log(body)

});