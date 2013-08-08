/**
 * Created with JetBrains WebStorm.
 * User: internet
 * Date: 07/08/13
 * Time: 7:30 AM
 * To change this template use File | Settings | File Templates.
 *
 * http://localhost:3412/quote/1 shows in json format
 * /quote/random works in json format
 *
 */

var express = require('express');
var app = express();         // was just express()

//app.use(express.json());      // apparently this is equivalent to bodyparser
var quotes = [
    { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
    { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
    { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
    { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];

app.listen(process.env.PORT || 3412);
//app.use(express.bodyParser());                  // doesn't resolve
//app.use(require('connect').bodyParser());
//app.use(connect.bodyParser());
app.get('/', function(req, res) {
    res.send('Username: ' + req.query['username']);
});

app.post('/', function(req, res) {
    console.log("quote");
    var newQuote = {

        author : req.body.author
    };

    quotes.push(newQuote);
    console.log("making new quote");
    res.json(true);
});


/*
app.get('/', function(req,res){    // set route and what it will do when accessed
    console.log("backslash");
    res.json(quotes);     // same as res.send
   // res.send(quotes[0].author);
});

app.get('/quote/random', function(req, res) {
    console.log("random");
    var id = Math.floor(Math.random() * quotes.length);
    var q = quotes[id];
    res.json(q);
});

app.get('/quote/:id', function(req, res) {
    console.log("quote id");
    if(quotes.length <= req.params.id || req.params.id < 0) {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }

    var q = quotes[req.params.id];
    res.json(q);
    //res.json({city: 'california'});    //test
 });



app.post('/quote', function(req, res) {
    console.log("quote");
    if(!req.body.hasOwnProperty('author') ||    // if doesnt have author
        !req.body.hasOwnProperty('text')) {     // if doesnt have text
        res.statusCode = 400;
        console.log("Error 400");
        return res.send('Error 400: Post syntax incorrect.');        // end function by calling back
    }

    var newQuote = {

        author : req.body.author,
        text : req.body.text
    };

    quotes.push(newQuote);
    console.log("making new quote");
    res.json(true);
});

app.delete('/quote/:id', function(req, res) {
    if(quotes.length <= req.params.id) {     // check length to make sure you don't delete something that isn't there
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }

    quotes.splice(req.params.id, 1); // remove quote
    console.log("removing quote");
    res.json(true);
});          */