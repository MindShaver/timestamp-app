var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.end("Hello World");
});

app.get('/:dateTime', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        "first": req.params.dateTime,
        "second": "This is a sample prop",
        "third": "This time with both - " + req.params.dateTime
    }, null, 3));
})

app.listen(8080, function(){
    console.log("Server running at 8080");
});