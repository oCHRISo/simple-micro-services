'use strict';

const express = require('express');
var bodyParser = require('body-parser');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/add', (req, res) => {
  console.log("First Number" + req.body.firstnumber)
  console.log("Second Number" + req.body.secondnumber)
  res.send(String(parseFloat(req.body.firstnumber) + parseFloat(req.body.secondnumber)));
});

app.get('/api/health', (req, res) => {
  res.send('{{status: ok}}\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
