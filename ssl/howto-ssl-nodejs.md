# How to setup Express for SSL

Source: [stackoverflow.com](http://stackoverflow.com/questions/5998694/how-to-create-an-https-server-in-node-js)

The Express API doc spells this out pretty clearly.

Additionally @clayzermk1 found this article helpful for generating a self-signed certificate: http://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server

I have added some comments and a snippet from the Node.js HTTPS documentation:

```
var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.cert')
};

// Create a service (the app object is just a callback).
var app = express();

// Create an HTTP service.
http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(443);
```