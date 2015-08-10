// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Initializing the server
var port = process.argv[2] || 8100;
app.listen(port, function(err){
	if(err){
		console.log(error);
	}
	else {
		console.log("Listening on port " + port);
	}
});