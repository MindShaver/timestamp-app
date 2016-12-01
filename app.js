var express = require('express');
var app = express();
var path = require('path');


app.get('/', function(req, res){
    res.end("Hello World");
});

// Grabs our passed in Date/Time
app.get('/:dateTime', function(req, res) {
    
    var myDate = new Date();
    var naturalDate = new Date(req.params.dateTime).toDateString();
    var unixDate = new Date();
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        "unix": unixDate,
        "natural": naturalDate
    }, null, 3));
})

app.listen(8080, function(){
    console.log("Server running at 8080");
});