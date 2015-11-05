var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var data = require('./test.js');

data('34.0211764,-118.4065364');
setTimeout(function(){
  console.log(data('34.0211764,-118.4065364'));
},5000);


app.get('/', function(req,res){

  res.sendFile('/Users/MattLee1/Desktop/foodz/index.html');
});



app.listen(3000);

module.exports = app;
