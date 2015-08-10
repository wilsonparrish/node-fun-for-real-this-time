'use strict'

//Dependencies
///////////////
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

/////////////////////////////
// Initializing the server //
/////////////////////////////
var port = process.argv[2] || 8100;
app.listen(port, function(err){
	if(err){
		console.log(error);
	}
	else {
		console.log("Listening on port " + port);
	}
});

////////////////
// Middleware //
////////////////
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cors());

///////////////
// Endpoints //
///////////////
var message = {
	"message": "Hello World"
};

app.get('/api/messages', function(req, res) {
	return res.send(message);
});
app.post('/api/receive_message', function(req, res){
	console.log(req.body);
	res.send();
});