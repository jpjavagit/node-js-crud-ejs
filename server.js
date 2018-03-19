/*
  @author: sanches.java@gmail.com
*/
var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://localhost/users');


/*The snippet below run the server*/
http.createServer(app).listen(app.get('port'), function(){
  console.log('Running server at ' + app.get('port') + ' port');
});
