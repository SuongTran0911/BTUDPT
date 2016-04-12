var mongoose = require('mongoose');
var express = require('express');
mongoose.connect('mongodb://localhost', function(err){
	if(err) throw err
		console.log('connected!');
	var app = express();
	app.listen(3000, function(){
		console.log('now listening on http://localhost:3000');
	})
})