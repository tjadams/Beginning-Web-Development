
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.get('/',function(req,res){
    res.type('text/plain'); // sets the content type
    res.send('Hello World'); // send text response

});

app.listen(process.env.port || 4730); // similar to app.set?

// came with file creation  just after var app express

 // all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
           express.
// development only
if ('development' == app.get('env')){
  app.use(express.errorHandler());
}


app.get('/', routes.index);
app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
