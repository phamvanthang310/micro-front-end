'use strict';

const http = require('http');
const https = require('https');
const url = require('url');
const { globalTracer, FORMAT_HTTP_HEADERS } = require('opentracing');
const tracer = globalTracer();

// By default tailor supports gzipped response from fragments
const requiredHeaders = {
  'accept-encoding': 'gzip, deflate'
};

/**
 * Leverage from `node-tailor/lib/request-fragment.js`
 * Allow parse fragment' src into url which inherits from Skipper Address
 *
 * @param {filterHeaders} - Function that handles the header forwarding
 * @param {skipperAddress} - Address of Skipper
 * @param {string} fragmentUrl - URL of the fragment server
 * @param {Object} fragmentAttributes - Attributes passed via fragment tags
 * @param {Object} request - HTTP request stream
 * @param {Object} span - opentracing span context passed for propagation
 * @returns {Promise} Response from the fragment server
 */
module.exports = (filterHeaders, skipperAddress) => (
  fragmentUrl,
  fragmentAttributes,
  request,
  span = null
) =>
  new Promise((resolve, reject) => {
    const parsedUrl = url.parse(skipperAddress ? `http://${skipperAddress}${fragmentUrl}` : fragmentUrl);
    console.log(parsedUrl);

    const options = Object.assign(
      {
        headers: Object.assign(
          filterHeaders(fragmentAttributes, request),
          requiredHeaders
        ),
        keepAlive: true,
        timeout: fragmentAttributes.timeout
      },
      parsedUrl
    );
    if (span) {
      tracer.inject(span.context(), FORMAT_HTTP_HEADERS, options.headers);
    }
    const { protocol: reqProtocol, timeout } = options;
    const protocol = reqProtocol === 'https:' ? https : http;
    const fragmentRequest = protocol.request(options);
    if (timeout) {
      fragmentRequest.setTimeout(timeout, fragmentRequest.abort);
    }
    fragmentRequest.on('response', response => {
      if (response.statusCode >= 500) {
        reject(new Error('Internal Server Error'));
      } else {
        resolve(response);
      }
    });
    fragmentRequest.on('error', reject);
    fragmentRequest.end();
  });
