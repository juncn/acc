const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  switch (req.url) {
    case '/about':
    case '/home':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(`.${req.url}.html`));
      break;
    case '/':
      res.writeHead(301, { 'Location': '/home' });
      res.end();
      break;
    default:
      res.writeHead(404);
      res.end();
      break;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello there\n');
});

server.listen(8000);