var express = require('express');
var app = express();
var nunjucks = require('nunjucks')


nunjucks.configure('./public/js/partials', {
    autoescape: true,
    express: app
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
