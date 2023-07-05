const http = require('http');
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<meta charset="UFT-8">');
    res.write('<h1>Olá Mundo!!</h1>');
    res.end()
});

server.listen(port, ()=>{
    console.log(`Servidor on ${port}`);
});