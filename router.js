/**
 * Created by Derek on 7/13/2017.
 */
var Profile = require("./profile.js");

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

		//JSON from Treehouse
		var studentProfile = new Profile(username);

		//on end
		studentProfile.on("end", function (profileJSON) {
			//show profile

			//store values from JSON object
			var values = {
				avatarUrl: profileJSON.gravatar_url,
				username: profileJSON.profile_name,
				badges: profileJSON.badges.length,
				javascriptPoints: profileJSON.points.JavaScript
			}
			//simple response
			response.write(values.username + " has " + values.badges + " badges\n");
			response.end('Footer\n');
		});
		//error handler
		studentProfile.on("error", function (error) {
			//show the error
			response.end('Footer\n');
		});
	}
}

//Use this Node API to define what is exported and made available via require()
module.exports.home = home;
module.exports.user = user;