// req vars
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

// vars
var PORT = process.env.PORT || 8000;
var app = express();
var data = require(path.join(__dirname,'./app/data/data.js'));

// middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,'./app/public')));

// routing
require(path.join(__dirname, './app/routes/htmlRoutes.js'))(app);

// app listen
app.listen(PORT, function(){
  console.log('listening on port ' + PORT);
});