(function($){

	var words = {
		'verbAdjective':[
			'working',
			'disgraced',
			'foolish',
			'winning',
			'losing',
			'flying',
			'defiled',
			'fat',
			'skinny',
			'wide',
			'thin',
			'silky',
			'rough',
			'burning',
			'cold'
		],
		'noun': [
			'pencil',
			'ass',
			'penis',
			'vagina',
			'hat',
			'rack',
			'table',
			'chair',
			'cow',
			'lamp',
			'magnet',
			'star',
			'quasar',
			'potato',
			'carrot',
			'banana',
			'whip',
			'dildo',
			'soda'
		]
	};

	function whatami(list){
		var self = this;
		this.words = list;
		this.verbAdjective = null;
		this.firstNoun = null;
		this.secondNoun = null;

		function init(){			
			$('#whatami .action button').on('click', self.button);
		}
	

		this.selectVerbAdjective = function(){
			var array = self.words.verbAdjective;
			var rand = array[Math.floor(Math.random() * array.length)];
			self.verbAdjective = rand;
		}

		this.selectNoun = function(){
			var array = self.words.noun;
			var rand = array[Math.floor(Math.random() * array.length)];
			var index = array.indexOf(rand);
			self.firstNoun = rand;
			if(index > -1){
				array.splice(index,1);
			}
			rand = array[Math.floor(Math.random() * array.length)];
			self.secondNoun = rand;
		}

		this.button = function(){

			self.selectVerbAdjective();
			self.selectNoun();

			var a = self.verbAdjective;
			var b = self.firstNoun;
			var c = self.secondNoun;
			var put = $('#whatami .answer strong');
			var string = a + ' ' + b + ' ' + c;
			put.text(string);

			return false;
		}	

		init();	
	}

	var ask = new whatami(words);

})(jQuery);