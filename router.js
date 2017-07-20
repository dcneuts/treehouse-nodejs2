/**
 * Created by Derek on 7/13/2017.
 */
var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");

var commonHeaders = {'Content-Type': 'text/html'};

//HTTP route GET and POST
function home(request, response) {
	if(request.url === "/") {
		if (request.method.toLowerCase() === "get") {
			response.writeHead(200, commonHeaders);
			renderer.view("header", {}, response);
			renderer.view("search", {}, response);
			renderer.view("footer", {}, response);
			response.end();
		} else {
			request.on("data", function(postBody) {
				var query = querystring.parse(postBody.toString());
				response.write(query.username);
				response.end();
			});
		}
	}
}

//Handle GET username
function user(request, response) {
	var username = request.url.replace("/", "");
	if(username.length > 0) {
		response.writeHead(200, commonHeaders);
		renderer.view("header", {}, response);

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
			};
			//simple response
			renderer.view("profile", values, response);
			renderer.view("footer", {}, response);
			response.end();
		});
		//error handler
		studentProfile.on("error", function (error) {
			//show the error
			renderer.view("error", {errorMessage: error.message}, response);
			renderer.view("search", {}, response);
			renderer.view("footer", {}, response);
			response.end();
		});
	}
}

//Use this Node API to define what is exported and made available via require()
module.exports.home = home;
module.exports.user = user;