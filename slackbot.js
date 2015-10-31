"use strict";

(function($){

	var slackbot = {
		version: 1,
		url: 'https://slack.com/api/',
		history: null,
		botPosts: [],
		ready: false,
		settings: {
			token: 'xoxb-13565578166-3bzRzraZPQozJIPC2vP0joeo',
			channel: 'C0AR2JE1F',
			user: 'U0DGMH04W'
		},
		init: function(){
			this.renderField();		
		},		
		renderField: function(){
			var url = this.url + 'users.setPresence';
			url = url + '?token=' + this.settings.token + '&presence=auto';
			var field = $('<form id="search"><input name="terminal" value="" placeholder="Say what?" autocomplete="off"/><div id="deck"/></form>');
			if($('input[name="terminal"]').length){				
				$('input[name="terminal"]').focus();
				this.setEvents();
				this.getHistory();
				$.get(url,function(data){
					console.log(data);
				});
				$('p').text('I support "say." and "delete." methods. (say.Hello world || delete.Hello world) If you don\'t like it, get cut!');
				console.log('created');
			} else {
				console.log('does not exist');
				$('body').append(field);
				this.renderField();
			}
		},
		setEvents: function(){
			var will = this;
			if($('#search').length){
				$('#search').on('submit',function(e){
					var msg = $(this).find('input[name="terminal"]').val();
					var parse = msg.split('.');
					var term = parse[0];
					var query = parse[1];
					if(will.ready == false){
						console.log('Gimme a sec bitch!');
						this.getHistory();
					} else {
						if(term == '' || term == null){
							console.log('Such Newb!');
						} else {
							if(query == '' || query == null){
								console.log('What R yah doin!');
							} else {
								if(term == 'say'){
									will.postMessage(query);
								} else if (term == 'delete'){
									will.deleteMessage(query);
								} else {
									console.log('Your shit!');
								}
							}
						}
					}

					e.preventDefault();
				});
			}
		},
		setMessage: function(msg){
			var url = this.url + 'chat.postMessage';
			var msg = msg;
			url = url + '?token=' + this.settings.token + '&channel=' + this.settings.channel + '&as_user=true&link_names=1&text=' + msg;

			return url;
		},
		postMessage: function(msg){
			var will = this;
			console.log('posting ...');			
			$.get(this.setMessage(msg), function(data){				
				will.getHistory();				
			}).done(function(){
				console.log('Posted!');
				$('input[name="terminal"]').val('say.');
			});			
		},
		deleteMessage: function(msg){
			var will = this;
			var url = this.url + 'chat.delete';
			var msg = msg;
			var find = JSON.search(this.history, '//*[contains(text, "' + msg + '")]/ts');			
			var done = false;			
			will.ready = false;
			url = url + '?token=' + this.settings.token + '&channel=' + this.settings.channel + '&ts=';
			if(find.length == 0){
				console.log('You stupid though!');
				will.ready = true;
			} else {
				for(var i = 0; i < find.length; i++){								
					(function(i){
						url = url + find[i];
						$.get(url,function(data){					
							console.log('Deleting Message ... ' + i);
							console.log(data);
							var c = i+1;
							if(c == find.length){
									done = true;
							}
							if(done == true){
								console.log('Messages Deleted.');
								will.getHistory();							
							}
						});										
					})(i);
				}
			}
		},
		getHistory: function(){
			var will = this;
			var url = this.url + 'channels.history';
			url = url + '?token=' + this.settings.token + '&channel=' + this.settings.channel;
			
			return $.get(url,function(data){
				will.history = data.messages;
				will.ready = true;
				console.log(will.history);
			});	
		}
	}

	slackbot.init();

})(jQuery);