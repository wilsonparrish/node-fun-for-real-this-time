'use strict'

//////////////////
// Dependencies //
//////////////////
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio');

// Twilio Credentials 
var accountSid = 'AC26414382d0bc81d609e658bf532f6c23'; 
var authToken = '2c1a276f2638b185c4df7fff3064197a'; 

//require the Twilio module and create a REST client 
var client = twilio(accountSid, authToken); 

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

/*
app.get('/api/messages', function(req, res) {
	return res.send(message);
});
app.post('/api/receive_message', function(req, res){
	console.log(req.body);
	res.send();
});
app.get('/api/testData/:attitude', function(req, res){
	console.log("req.params: ", req.params);
	console.log("req.params.attitude: ", req.params.attitude);
	if(req.params.attitude === 'positive') {
		res.send(positiveMessage);
	}
	if(req.params.attitude === 'rude') {
		res.send(rudeMessage);
	}
})
*/



app.post('/api/receive_message', function(req, res){
	console.log(req.body.message);
	client.messages.create({ 
		to: "2084063504", 
		from: "+12089043426", 
		body: "req.body.message",   
	}, function(err, message) { 
		console.log(message.sid); 
	});
});