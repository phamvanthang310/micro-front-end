'use strict';

const http = require('http');
const path = require('path');
const Tailor = require('node-tailor');
const fetchTemplateFn = require('node-tailor/lib/fetch-template');
const baseTemplateFn = () => 'base';
const filterHeader = require('node-tailor/lib/filter-headers');
const requestFragment = require('./utils/request-fragment');
const skipperAddress = process.env.SKIPPER_ADDRESS;

const tailor = new Tailor({
  fetchTemplate: fetchTemplateFn(
    path.join(__dirname, 'templates'),
    baseTemplateFn
  ),
  requestFragment: requestFragment(filterHeader, skipperAddress),
  maxAssetLinks: 5
});

http
  .createServer((req, res) => {
    const { url } = req;
    if (url === '/favicon.ico') {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      return res.end('')
    }
    req.headers['x-request-uri'] = url;

    console.log(req.url);

    tailor.requestHandler(req, res)
  })
  .listen(8080, function () {
    console.log('Tailor server listening on port 8080');
    if(skipperAddress)
      console.log(`Tailor parses fragment with skipper address: ${skipperAddress}`);
  });
