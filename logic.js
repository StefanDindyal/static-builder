// Problem: We need a simple way to look at a user's badge count and Javascript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var http = require("http");
var username = "stefandindyal";

// Print out message
function printMessage(username, badgeCount, points){
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript";
	console.log(message);
}

// Print out error messages
function printError(error){
	console.error(error.message);
}

// Connect to the API URL (http://teamtreehouse.com/username.json)
var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
	var body = "";
// Read the data
response.on("data", function(chunk){
	body += chunk;
});
response.on("end", function(){
	if(response.statusCode === 200) {
		try {
			var profile = JSON.parse(body);
			printMessage(username, profile.badges.length, profile.points.JavaScript);
		} catch(error) {
			// Parse Error
			printError(error);
		}
	} else {
		// Status Code Error
		printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
	}
});
// Parse the data
// Print the data
});

// Connection Error
request.on("error", printError);