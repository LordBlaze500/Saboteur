const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.body);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const x = { a: '5' }
  res.end(JSON.stringify(x));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});