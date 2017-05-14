var mongoose = require('mongoose');

//set up a mongoose connection
var uri = process.env.MONGO_URL ||'mongodb://bobinsky:FSERW#!@ds139791.mlab.com:39791/mvendtestapi';

var conn = mongoose.createConnection(uri);

//bind to the error event so that errors will be printed to the console
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));

//test if connection is successful
conn.once('open', function(){
	console.log("Successfully connected to db server: ", process.env.NODE_ENV);	//ds161169
});

module.exports = conn;