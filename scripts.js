"use strict";
!(function($){
	var cur = 0; 
	var end = 0;
	var deadline = 'Fri Oct 21 2016 18:00:00';
	var feature = $('#feature .holder');
	var video1 = $('#video1');
	var $window = $(window).width();
	if($window <= 1024){
		$('#video').addClass('show');
		$('#play').show();
	}
	if(video1.length){
		$('#video1 source').attr('src','countdown-vid.mp4');
		$('#video1').get(0).load();
		video1.on('loadeddata', function(){
			var v = $(this).get(0);		
			v.playbackRate = 1;
			// v.volume = 0;
			v.play();
			cur = $('#video1').get(0).currentTime; 
			end = $('#video1').get(0).duration;
			// Start Clock
			initializeClock('clockdiv', deadline);
		});
		video1.on('playing', function(){
			$('#video').addClass('show');
		});
		video1.on('timeupdate', function(e){
			if(this.currentTime > 10 && !$('#clockdiv').hasClass('show')){
				cur = this.currentTime;
				end = this.duration;
				// console.log(cur+' : '+end);
				$('#clockdiv').addClass('show');
			}
		});
	}	
	$('#play').on('click', function(e){
		e.preventDefault();
		video1.get(0).play();
	});
	function getTimeRemaining(endtime){
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor( (t/1000) % 60 );
		var minutes = Math.floor( (t/1000/60) % 60 );
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		var days = Math.floor( t/(1000*60*60*24) );
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	function initializeClock(id, endtime){
		var clock = document.getElementById(id);
		var minutes = getTimeRemaining(endtime).minutes;
		function updateClock(){
			var t = getTimeRemaining(endtime);
			var daysSpan = clock.querySelector('.days');
			var hoursSpan = clock.querySelector('.hours');
			var minutesSpan = clock.querySelector('.minutes');
			var secondsSpan = clock.querySelector('.seconds');
			daysSpan.innerHTML = t.days;
		    hoursSpan.innerHTML = t.hours;
		    minutesSpan.innerHTML = t.minutes;
		    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
			if(t.total<=0){
				clearInterval(timeinterval);
			}			
			var mark = end/7;			
			if(t.days == 0){
				mark = end - (mark * 0.5);
			} else {
				mark = end - (mark * (t.days));
			}
			if($('#video1').get(0).currentTime < mark){
				$('#video1').get(0).currentTime = mark;
			}
		}
		updateClock(); // run function once at first to avoid delay
		var timeinterval = setInterval(updateClock,1000);
	}			
})(jQuery);