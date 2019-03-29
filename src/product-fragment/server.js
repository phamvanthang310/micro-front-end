'use strict';

const http = require('http');
const url = require('url');
const fs = require('fs');

const fragmentServer = (prefix, port = process.env.PORT) =>
  http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    const jsHeader = {'Content-Type': 'application/javascript'};
    const regExp = new RegExp(/\.(js|css|html)$/);

    console.log(pathname);

    if (regExp.test(pathname)) {
      res.writeHead(200, jsHeader);
      return fs.createReadStream(`.${pathname}`).pipe(res);
    }

    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Link': `</${prefix}/dist/es2015-polyfills.js>; rel="fragment-script",</${prefix}/dist/main.js>; rel="fragment-script"`
    });
    return res.end('');

  }).listen(port, () => {
    console.log(`${prefix} server listening on port ${port}`);
  });

fragmentServer('product-fragment', 8084);
