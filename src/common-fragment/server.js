'use strict';

const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  const jsHeader = { 'Content-Type': 'application/javascript' };

  console.log(pathname);
  switch (pathname) {
    case '/dist/bundle.js':
      res.writeHead(200, jsHeader);
      return fs.createReadStream('./dist/bundle.js').pipe(res);
    default:
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Link': '</common/dist/bundle.js>; rel="fragment-script"'
      });
      return res.end('')
  }
}).listen(8083, () => {
  console.log('react-fragment server listening on port 8083')
});
