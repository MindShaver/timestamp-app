var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendFile('index.html', {root: __dirname});
});

// Grabs our passed in Date/Time
app.get('/:dateTime', function(req, res) {
    var input = req.params.dateTime;
    var naturalDate;
    var unixDate;
    
    res.setHeader('Content-Type', 'application/json');
    
    if(Number(input) > 0) {
        unixDate = +input;
        var naturalDate = new Date(input * 1000).toDateString();
    } else if(new Date(input).toString() !== "Invalid Date") {
        unixDate = new Date(input).getTime() / 1000;
        naturalDate = new Date(input).toDateString();
    } else {
        unixDate = null;
        naturalDate = null;
    }
    
    res.send(JSON.stringify({
        "unix": unixDate,
        "natural": naturalDate
    }, null, 3));
})

app.listen(8080, function(){
    console.log("Server running at 8080");
});