const express = require ('express');
const app = express ();

const server = require ('http').createServer (app);
server.listen (3000);

app.get ('/', function (req, res) {
  // res.send('<h2>HELLO</h2>')
  res.sendFile (__dirname + '/html.html');
});

app.get ('/welcome.aspx', function (req, res) {
  res.send ('<h2>HELLO</h2>');
  // res.sendFile (__dirname + '/html.html');
});

app.get ('/tinhtong/:so1/:so2', function (req, res) {
  //   res.send ('<h2>HELLO</h2>');
  // res.sendFile (__dirname + '/html.html');
  let n = req.params.so1;
  n = parseInt (n);
  let m = req.params.so2;
  m = parseInt (m);
  let tong = n + m;
  res.send ('<h1>' + tong + '</h1>');
});
