//Create Node web server, used docs from Node.js website
//Default port number okay due to IDE, not using Treehouse workspace
var http = require('http');
http.createServer(function(request, response) {
	homeRoute(request, response);
}).listen(1337, '127.0.0.1');
console.log('Server running on port 1337');

//HTTP route GET and POST
function homeRoute(request, response) {
	if(request.url === "/") {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write("Header\n");
		response.write("Search\n");
		response.end('Footer\n');
	}

}