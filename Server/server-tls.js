const tls = require('tls');
const fs = require('fs');

const options = { 
    key: fs.readFileSync('server-key.pem'), 
    cert: fs.readFileSync('server-crt.pem'), 
    ca: fs.readFileSync('ca-crt.pem'), 
    requestCert: true, 
    rejectUnauthorized: true
}; 

const server = tls.createServer(options, (socket) => {
    console.log('server connected', 
        socket.authorized ? 'authorized' : 'unauthorized');
    
    // console.log(socket)
    socket.on('error', (error) => {
        console.log(error);
    });
    
    socket.write('welcome!\n')
    socket.setEncoding('utf8')
    socket.pipe(process.stdout)
    socket.pipe(socket)
});

server.listen(443, () => {
    console.log('server listen on port 443');
});