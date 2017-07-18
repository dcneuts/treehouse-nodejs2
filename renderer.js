/**
 * Created by derek on 7/17/17.
 */

var fs = require("fs");

function view(templateName, values, response) {
	//read from template files
	var fileContents = fs.readFileSync('./views/' + templateName + '.html', function (error, fileContents) {
		//insert values into content
		
		//write content out to response
		response.write(fileContents);
	});
	
}

module.exports.view = view;