"use strict";
	
	// JSON Test A	
	jQuery(function($){
		var mai = {
			version: 1,
			drive: null,
			ready: false,
			looking: false,
			init: function(){
				Array.prototype.unique = function() {
				    return this.reduce(function(accum, current) {
				        if (accum.indexOf(current) < 0) {
				            accum.push(current);
				        }
				        return accum;
				    }, []);
				}
				mai.save(minerva);
				mai.query();
			},
			save: function(data){
				var will = this;
				// var sync = $.getJSON(data);
				// sync.done(function(data){
				// 	mai.drive = data;
				// 	will.ready = true;
				// });
				mai.drive = data;
				// console.log(mai.drive);
			},
			find: function(term, input){				
				var data = this.drive;				
				var search, xpath;				
				if(term == '' || term == 'help'){
					xpath = '//terms'
				} else if(input == '' || input == undefined){
					xpath = '//'+term;
				} else if(term == 'name') {
					xpath = '//*[contains(name, "'+input+'")]';
				} else {
					xpath = '//*['+term+'="'+input+'"]';
				}				

				try {
					search = JSON.search(data, xpath);	
				} catch(err){					
					search = [];
				}				

				if(search.length > 0){
					search = this.sortOut(search);
				} else {
					search = search;
				}
				
				return search;
			},
			sortOut: function(arr){
				var sorted_arr = arr;
				var results = sorted_arr.unique();				
				return results;
			},
			query: function(){
				var will = this;
				var field = $('body').find('#search');				
				if(field.length){
					field.find('input[name="terminal"]').focus();
					field.on('input', function(e){					
						var input = field.find('input[name="terminal"]').val();
						var parse = input.split('.');
						var term = parse[0]
						var query = parse[1];
						var end;
						setTimeout(function(){
							end = will.find(term, query);
							will.buildView(end);	
						}, 1000);						
						e.preventDefault();
					});
					field.on('submit', function(e){
						e.preventDefault();
					});
				} else {
					console.log('Terminal not found.');
					will.buildTerminal();
					will.query();
				}
			},
			buildTerminal: function(){
				var body = $('body');
				var field = $('<form id="search"><p>Enter a term and a query:</p><input name="terminal" value="" placeholder="" autocomplete="off"/><div id="deck"/></form>');
				console.log('Creating terminal.')
				body.append(field);
				if(body.find('#search').length){
					console.log('Terminal created.');
				}
			},
			buildView: function(data){
				var str = '';								
				// console.log(Object.prototype.toString.call( data ));				
				// Object.prototype.toString.call( data ) === '[object Object]';				
				if(data.length == 0){
					str = '<ul><li>&hellip;</li></ul>';
				} else {
					if(data[0].length == undefined){						
						for(var i = 0; i < data.length; i++){
							if(data[i] % 1 === 0){
								str += '<ul>';
									str += '<li>'+data[i]+'</li>';									
								str += '</ul>';
							} else {
								str += '<ul>';
									str += '<li>Name: '+data[i].name+'</li>';
									str += '<li>Age: '+data[i].age+'</li>';
									str += '<li>Gender: '+data[i].gender+'</li>';
									str += '<li>Eye Color: '+data[i].eyeColor+'</li>';
									str += '<li>Hair Color: '+data[i].hairColor+'</li>';
									str += '<li>Type: '+data[i].type+'</li>';
									str += '<li>Affiliation: '+data[i].affiliation+'</li>';
									if(data[i].occupation[1].length){
										var ocType = ' ('+data[i].occupation[1]+')';
									} else {
										var ocType = '';
									}
									str += '<li>Occupation: '+data[i].occupation[0]+ocType+'</li>';
									str += '<li>Class: '+data[i].classLevel+'</li>';
									str += '<li>Threat: '+data[i].threatLevel+'</li>';
									str += '<li>Evaluation: Empty</li>';
								str += '</ul>';
							}
						}					
					} else {						
						for(var i = 0; i < data.length; i++){						
							str += '<ul>';
								str += '<li>'+data[i]+'</li>';
							str += '</ul>';
						}					
					}					
				}
				if($('#deck').length){
					$('#deck').addClass('active').html(str).after(function(){
						$(this).addClass('slide');
					});
				}
			}
		}
		mai.init();
	});

	// JSON Test B
	// var data = {
	// 	version: 1,
	// 	info: [{
	// 			type: 'person',
	// 			name: 'Jack'
	// 		},
	// 		{
	// 			type: 'place',
	// 			name: 'New York'
	// 		},
	// 		{
	// 			type: 'person',
	// 			name: 'Wendy'
	// 		},
	// 		{
	// 			type: 'place',
	// 			name: 'Japan'
	// 		}],
	// 	extra: 'Things and More Things'
	// };
	// var app = {
	// 	version: 1,
	// 	type: null,
	// 	data: null,
	// 	settings: {},
	// 	getData: function(src){
	// 		this.data = src.info;
	// 	},
	// 	getPeople: function(){
	// 		this.people = [];
	// 		for(var i = 0; i < this.data.length; i++){
	// 			if(this.data[i].type == 'person'){
	// 				this.people.push(this.data[i].name);
	// 			}				
	// 		}
	// 		return this.people;
	// 	},
	// 	getPlaces: function(){
	// 		this.places = [];
	// 		for(var i = 0; i < this.data.length; i++){
	// 			if(this.data[i].type == 'place'){
	// 				this.places.push(this.data[i].name);
	// 			}				
	// 		}
	// 		return this.places;
	// 	},
	// 	countData: function(){
	// 		return this.data.length;
	// 	}
	// }
	// app.getData(data);
	// console.log(app.countData());
	// console.log(app.getPeople());
	// console.log(app.getPlaces());

	// Cart Ob
	// var cart = {
	// 	total: null,
	// 	itemsCount: null,
	// 	itemsId: [],
	// 	addTo: function(id){
	// 		this.itemsId.push(id);
	// 	},
	// 	removeFrom: function(id){
	// 		var index = this.itemsId.indexOf(id);
	// 		if(index > -1){
	// 			this.itemsId.splice(index, 1);	
	// 		}			
	// 	}
	// }
	// cart.addTo(1956);
	// cart.addTo(5423);
	// cart.addTo(2021);
	// cart.addTo(1207);
	// cart.addTo(1942);
	// cart.removeFrom(5423);
	// console.log(cart);