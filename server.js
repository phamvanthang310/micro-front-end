'use strict';

const http = require('http');
const path = require('path');
const Tailor = require('node-tailor');
const tailor = new Tailor({
  templatesPath: path.join(__dirname, 'templates')
});

http
  .createServer((req, res) => {
    const { url } = req;
    if (url === '/favicon.ico') {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      return res.end('')
    }
    req.headers['x-request-uri'] = url;

    req.url = '/index';

    // TODO: multiple template layout
    // switch (url) {
    //   case '/angular-fragment':
    //     req.url = '/angular-fragment';
    //     break;
    //   case '/react-fragment':
    //     req.url = '/react-fragment';
    //     break;
    //   default:
    //     req.url = '/index';
    // }

    tailor.requestHandler(req, res)
  })
  .listen(8080, function () {
    console.log('Tailor server listening on port 8080')
  });