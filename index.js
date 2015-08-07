(function(){

	"use strict";

	var json = {

		"story": [

			{
				"name": "Wings of Destiny",
				"synopsis": "Things start to happen here.",
				"characters": 
				[
					{
						"name": "Ivran Price"
					}
				],
				"worlds": 
				[
					{"name": "Earth"}
				]
			},
			{
				"name": "Eternal Wanderer",
				"synopsis": null,
				"characters": null,
				"world": null
			},
			{
				"name": "Eleanor",
				"synopsis": null,
				"characters": 
				[
					{
						"name": "Eleanor Blake",
						"age": 13,
						"gender": "Female",
						"eyeColor": "Green",
						"hairColor": "Purple",
						"race": "Human/Demon Hybrid",
						"affiliation": "Unknown",
						"occupation": "Student (Polydor Academy)",
						"classLevel": "C",
						"threatLevel": "White",
						"eval": "A young, shy girl with issues coping with her own existence. She wonders where her place in the world is and why many people don't seem to accept her. Though she has others that are close to her she sees them as precious gifts that she thinks she is undeserving of. Unknown to them she is more greatful to them because she counts herself lucky to know them. She would rather sacrifice herself and her happiness if it means sparing them any pain or agony.",
						"alt": 
						[
							{"name": "Dark Lord Eleanor"}
						]
					},
					{
						"name": "Cheryl Jacoby"
					}
				],
				"worlds": 
				[
					{"name": "Earth"},
					{"name": "Asheron"},
					{"name": "Requiem"}
				]
			}

		]
		
	};

	var elem = document.getElementById('mai');

	function list(data, element)
	{
		this.info = data;
		this.element = element;
		this.output = null;
	}

	list.prototype.sort = function()
	{
		var htmlString = "";
		for (var i = 0; i < this.info.story.length; i++) 
		{	
			htmlString += "<div>";
			htmlString += json.story[i].name;

				// if (indexJSON.story[i].synopsis !== null){
				// 	htmlString += "<br><strong><p>";
				// 	htmlString += indexJSON.story[i].synopsis;
				// 	htmlString += "</p></strong>";
				// }

				// if (indexJSON.story[i].characters !== null) {			

				// 	for (var j = 0; j < indexJSON.story[i].characters.length; j++) {
				// 		console.log(indexJSON.story[i].characters.length);
				// 		htmlString += "<h2>";
				// 		htmlString += indexJSON.story[i].characters[j].name;
				// 		htmlString += "</h2>";
				// 	}

				// }
			htmlString += "</div>";
		}
		return this.output = htmlString;
	}

	list.prototype.print = function()
	{
		this.element.innerHTML = this.output;
		return true;
	}

	var test = new list(json, elem);

	test.sort();
	test.print();

}());