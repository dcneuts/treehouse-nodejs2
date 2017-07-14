//Create Node web server, used docs from Node.js website
//Default port number okay due to IDE, not using Treehouse workspace
var router = require("./router.js");

var http = require('http');
http.createServer(function(request, response) {
	//Included from router.js file as exports
	router.home(request, response);
	router.user(request, response);
}).listen(1337, '127.0.0.1');
console.log('Server running on port 1337');