var request = require('request');
var express = require('express');
var app  = express();

app.set("view engine", "ejs");

app.get('/', function(req, res){
   res.render('search'); 
});

app.get('/results/', function(req, res){
    request('http://www.omdbapi.com/?s='+req.query.s, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var results = JSON.parse(body);
            res.render ('results', {data: results});
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App Running");
});
