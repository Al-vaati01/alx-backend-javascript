#!/usr/bin/node
const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer();

app.on('request', (_, res) => {
  const response = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', response.length);
  res.statusCode = 200;
  res.write(response);
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening on Port: ${PORT} in ${HOST}`);
});
module.exports = app;
