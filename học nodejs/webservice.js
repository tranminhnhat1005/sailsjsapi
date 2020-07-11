var http = require ('http');
var fs = require ('fs');

http
  .createServer (function (req, res) {
    res.writeHead (200, {'Content-Type': 'application/json'});
    var obj = {
      ho: 'Tran',
      ten: 'Nhat',
      namsinh: 1998,
    };
    res.end (JSON.stringify (obj));
  })
  .listen (8888);
