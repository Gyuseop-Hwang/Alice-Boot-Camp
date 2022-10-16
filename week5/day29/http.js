const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end("Hello Elice!")
}).listen(8080)