#!/usr/bin/node
const http = require('http');

const PORT = 1234;

const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(PORT);
