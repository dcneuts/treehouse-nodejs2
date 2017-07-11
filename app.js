//Create Node web server, used docs from Node.js website
//Default port number okay due to IDE, not using Treehouse workspace
var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running on port 1337');