/**
 * Created by Derek on 7/13/2017.
 */
//HTTP route GET and POST
function home(request, response) {
	if(request.url === "/") {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write("Header\n");
		response.write("Search\n");
		response.end('Footer\n');
	}
}

//Handle GET username
function user(request, response) {
	var username = request.url.replace("/", "");
	if(username.length > 0) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write("Header\n");
		response.write(username + "\n");
		response.end('Footer\n');
	}
}

//Use this Node API to define what is exported and made available via require()
module.exports.home = home;
module.exports.user = user;