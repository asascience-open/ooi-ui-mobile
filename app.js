var express = require('express');
var app = express();
var nunjucks = require('nunjucks')


nunjucks.configure('./public/static/templates', {
    autoescape: true,
    express: app
});

app.use(express.static('public/static'));
app.get('/', function (req, res) {
    res.render('TOC.html');
});
app.get('/plot', function(req, res){
	res.render('Plot.html')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});