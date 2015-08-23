"use strict";

(function($){

	// I want to do a search for a word that will bring up information about
	// the words meaning

	var mai = $('#mai');

	function index(json){
		this.json = json;
	}

	function search(query){
		this.query = query;
	}

	var arr = Object.keys(json).map(function(k) { return json[k] });

	// console.log(arr);

	$.each(json, function(i, v){
		var title = v.title;
		var characters = v.characters;
		var html = '';

		html += '<div class="story">';
		html += '<h1>' + title + '</h1>';		
		
		if(characters != undefined){			
		
				for(var c = 0; c < characters.length; c++){			

					html += '<ul>';				
					html += '<li>' + characters[c].name + '</li>';
					html += '<li>' + characters[c].age + '</li>';
					html += '<li>' + characters[c].gender + '</li>';
					html += '<li>' + characters[c].eyeColor + '</li>';
					html += '<li>' + characters[c].hairColor + '</li>';
					html += '<li>' + characters[c].race + '</li>';
					html += '<li>' + characters[c].affiliation + '</li>';
					html += '<li>' + characters[c].occupation + '</li>';
					html += '<li>' + characters[c].classLevel + '</li>';
					html += '<li>' + characters[c].threatLevel + '</li>';
					html += '<li>' + characters[c].eval + '</li>';
					html += '</ul>';

				}			
		
		} else {
			console.log('no characters');
		}
		
		html += '</div>';

	    mai.append(html);
	    
	});

	// console.log(jsonB[2]['characters'].length);

	function getCharacters(){

	}

})(jQuery);