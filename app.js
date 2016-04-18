var express = require('express');
var app = express();
var nunjucks = require('nunjucks')


/*nunjucks.configure('../public/js/partials', {
    autoescape: true,
    express: app
});*/

app.use(express.static('public/static'));
app.get('/', function (req, res) {
    res.sendFile('/Users/asadev/Desktop/ooi-ui-mobile/public/static/templates/TOC.html');
});
app.get('/plot', function(req, res){
	res.sendFile('/Users/asadev/Desktop/ooi-ui-mobile/public/static/templates/Plot.html')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});