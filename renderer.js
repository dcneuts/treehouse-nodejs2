/**
 * Created by derek on 7/17/17.
 */

var fs = require("fs");

function mergeValues(values, content) {
	for(var key in values) {
		content = content.replace("{{" + key + "}}", values[key]);
	}
	return content;
}

function view(templateName, values, response) {
	//read from template files
	var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
		//insert values into content
		fileContents = mergeValues(values, fileContents);
		//write content out to response
		response.write(fileContents);
	
}

module.exports.view = view;