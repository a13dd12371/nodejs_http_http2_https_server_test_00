// serverHTTP.js

const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  const path = url.parse(req.url).pathname
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!\n');
  res.write(`path: ${path}\n`);
  res.end();
}).listen(8080);
