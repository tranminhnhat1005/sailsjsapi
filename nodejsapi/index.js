const express = require ('express');
const app = express ();
app.listen (3000);

const bodyParser = require ('body-parser');
const urlencodedParser = bodyParser.urlencoded ({extended: false});

// http://localhost:3000/hello

app.get ('/hello', (req, res) => {
  res.send ('<h1>Get I`m Nak</h1>');
});

app.post ('/hello', urlencodedParser, (req, res) => {
  let u = req.body.username;
  let p = req.body.password;
  res.send ('Username: ' + u + ' Password :' + p);
});

app.get ('/hello/:id', (req, res) => {
  let i = req.params.id;
  res.send ('Server nhan duoc id = ' + i);
});

//EJS

app.set ('view engine', 'ejs');
app.set ('views', './views');

app.get ('/nak', (req, res) => {
  res.render ('nak');
});
