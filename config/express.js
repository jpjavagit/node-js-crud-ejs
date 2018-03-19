var express = require('express');
var load = require('express-load');
var parser = require('body-parser');

module.exports = function(){

  var app = express();

  /*Port 3000*/
  app.set('port', 3000);

  /*Public folder*/
  app.use(express.static('./public'));

  app.set('view engine', 'ejs');
  app.set('views','./app/views');

  app.use(parser.urlencoded({extended:true}));
  app.use(parser.json());

  app.use(require('method-override')());

  /*'load' is a function that load the folders in order*/
  load('models',{cwd:'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
