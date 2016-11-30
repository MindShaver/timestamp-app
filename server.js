var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.end("Hello World");
});

app.listen(8080, function(){
    console.log("Server running at 8080");
});