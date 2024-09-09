const http = require('http');
const server = http.createServer((request, response)=>{
    console.log(request.method, request.url, request.headers);
    console.log(request.body);
    response.end('this is the message for response end hopes you get it');
});

server.listen(3001,'localhost',() =>{
    console.log('message if you get it')
});