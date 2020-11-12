const http = require('http');

const req = http.request(
  {
    hostname: 'www.google.com',
  },
  res => {
    res.on('data', data => {
      console.log(`BODY: ${data.toString()}`);
    })
  }
);

req.on('error', error => {
  console.log(error);
});

req.end();