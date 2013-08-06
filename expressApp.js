var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Hello World, my name is Tyler. This is an Express JS test.');
});
   console.log('Welcome to port 8000 at http://127.0.0.1:8000/');
app.listen(8000);