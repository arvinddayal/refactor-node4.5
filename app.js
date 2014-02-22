
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var destinationController = require('./controllers/controller.js');
var app = express();
var submitController = require('./controllers/submit.js');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', destinationController.index);
app.get('/test', submitController.index);
// app.get('/form', function (req, res) {
// 	var fileContents = fs.readFile('home.jade', function(err, data){
// 		res.writeHead(200, {'Content-Type': 'text/jade'});
// 		res.end(data);
// 	});
// });
app.post('/form', function(req, res){
	console.log(req.body);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
