#!/usr/bin/node
const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer();

app.on('request', (_, res) => {
    res.write('Hello Holberton School!');
    res.statusCode = 200;
    res.end();
})

app.listen(PORT, HOST, ()=>{
    process.stdout.write(`Server listening on Port: ${PORT} in ${HOST}`);
});
