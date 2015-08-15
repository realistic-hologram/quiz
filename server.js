var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser());

app.post('/', function(req, res) {
  var score = 0;
  if (req.body.q1 === 'hugh grant') { score++ }
  if (req.body.q2 === 'egg whites') { score++ }
  if (req.body.q3 === 'reeses pieces') { score++ }
  res.send('You got ' + score + ' questions correct!');
});

app.listen(3000);
