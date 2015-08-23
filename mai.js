"use strict";

(function($){

	// I want to do a search for a word that will bring up information about
	// the words meaning

	function index(json){
		this.json = json;
	}

	function search(query){
		this.query = query;
	}

	var arr = Object.keys(json).map(function(k) { return json[k] });

	// console.log(arr);

	$.each(json.story, function(i, v) {
    if (v.name == "Eleanor") {
        console.log(v.characters);
        return;
    }
});

})(jQuery);