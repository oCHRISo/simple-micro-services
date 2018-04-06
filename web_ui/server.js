'use strict';

const express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var add_service = process.env.add_service;
var subtract_service = process.env.subtract_service;

var headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.set('view engine', 'pug')
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

function calculation(num1, num2, service){

  // Start the request

}

app.get('/', (req, res) => {
  res.render('index', { answer: '' })
});

app.post('/', (req, res) => {
  console.log("First Number is " + req.body.firstnumber)
  console.log("Second Number is " + req.body.secondnumber)
  console.log("Option selected is " + req.body.function)
  console.log("Add endpoint " + add_service)
  console.log("Subtract endpoint " + subtract_service)


  if (req.body.function == "add"){
    var options = {
        url: add_service + "/" + req.body.function,
        method: 'POST',
        headers: headers,
        form: {'firstnumber': req.body.firstnumber, 'secondnumber': req.body.secondnumber}
    }

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // Print out the response body
            console.log(body)
            res.render('index', { answer: body})
        } else{
            console.log(error)
            return "ERROR"
        }
    })
  } else if (req.body.function == "subtract"){
    var options = {
        url: subtract_service + "/" + req.body.function,
        method: 'POST',
        headers: headers,
        form: {'firstnumber': req.body.firstnumber, 'secondnumber': req.body.secondnumber}
    }

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // Print out the response body
            console.log(body)
            res.render('index', { answer: body})
        } else{
            console.log(error)
            return "ERROR"
        }
    })
  }
});

app.get('/api/health', (req, res) => {
  res.send('{{status: ok}}\n');
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
