(function($){

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
				"worlds": null
			},
			{
				"name": "Eleanor",
				"synopsis": null,
				"characters": 
				[
					{
						"name": "Eleanor Blake",
						"attr": 
						{
							"age": 13,
							"gender": "Female",
							"eyeColor": "Green",
							"hairColor": "Purple",
							"race": "Human/Demon Hybrid",
							"affiliation": "Unknown",
							"occupation": "Student (Polydor Academy)",
							"classLevel": "C",
							"threatLevel": "White",
							"eval": "A young, shy girl with issues coping with her own existence. She wonders where her place in the world is and why many people don't seem to accept her. Though she has others that are close to her she sees them as precious gifts that she thinks she is undeserving of. Unknown to them she is more greatful to them because she counts herself lucky to know them. She would rather sacrifice herself and her happiness if it means sparing them any pain or agony."	
						},						
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
					{
						"name": "Earth"
					},
					{"name": "Asheron"},
					{"name": "Requiem"}
				]
			}

		]
		
	};

	function list(data, element)
	{
		this.info = data;
		this.element = element;
		this.output = null;
		this.attr = [];
	}

	list.prototype.sort = function()
	{
		var out = "";
		out += "<div>";
		out += "<h2>Stories</h2>";
		for (var i = 0; i < this.info.story.length; i++) 
		{				
			if(this.info.story[i].name !== null)
			{
				out += "<div>";
				out += this.info.story[i].name;
				out += "</div>";	
			}			
			if(this.info.story[i].synopsis !== null)
			{
				out += "<div>";
				out += this.info.story[i].synopsis;
				out += "</div>";
			}
			if(this.info.story[i].characters !== null)
			{			
				out += "<h3>characters</h3>";
				for (var c = 0; c < this.info.story[i].characters.length; c++) 
				{					
					out += "<p class=\"character\">";
					out += this.info.story[i].characters[c].name;
					out += "</p>";
					this.attr.push(this.info.story[i].characters[c].attr);
				}
			}
			if(this.info.story[i].worlds !== null)
			{			
				out += "<h3>Worlds</h3>";
				for (var w = 0; w < this.info.story[i].worlds.length; w++) 
				{					
					out += "<p>";
					out += this.info.story[i].worlds[w].name;
					out += "</p>";
				}
			}			
		}
		out += "</div>";
		return this.output = out;
	}

	list.prototype.print = function()
	{
		this.element.html(this.output);
		return true;
	}

	list.prototype.bio = function(element, text)
	{
		var out = "";
		out += "<ul>";
		for (var i = 0; i < this.attr.length; i++)
		{
			if(this.attr[i] !== undefined && this.attr[i].name == text)
			{
				out += "<p>";
				out += this.attr[i].age;
				out += "</p>";
				out += "<p>";
				out += this.attr[i].gender;
				out += "</p>";
				out += "<p>";
				out += this.attr[i].eyeColor;
				out += "</p>";
				out += "<p>";
				out += this.attr[i].hairColor;
				out += "</p>";
				out += "<p>";
				out += this.attr[i].race;
				out += "</p>";
				out += "<p>";
				out += this.attr[i].affiliation;
				out += "</p>";
				out += "<p>";
				out += this.attr[i].occupation;
				out += "</p>";
				out += "<p>";
				out += this.attr[i].class;
				out += "</p>";
				out += "<p>";
				out += this.attr[i].threatLevel;
				out += "</p>";
				out += "<p>";
				out += this.attr[i].eval;
				out += "</p>";
			}			
		}
		out += "</ul>";
		element.after(out);
		console.log(this.attr);
	}

	var test = new list(json, $('#mai'));

	test.sort();
	test.print();

	$('.character').on('click', function(){
		var text = $(this).text();
		console.log($(this));
		test.bio($(this), text);
	});

}(jQuery));