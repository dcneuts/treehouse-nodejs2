/**
 * Created by Derek on 7/13/2017.
 */
//HTTP route GET and POST
function homeRoute(request, response) {
	if(request.url === "/") {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write("Header\n");
		response.write("Search\n");
		response.end('Footer\n');
	}
}

//Handle GET username
function userRoute(request, response) {
	var username = request.url.replace("/", "");
	if(username.length > 0) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write("Header\n");
		response.write(username + "\n");
		response.end('Footer\n');
	}
}