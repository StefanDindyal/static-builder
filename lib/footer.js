$(function(){
	$(window).scroll(function(){
		var windoWindth=$(window).width();
	// console.log("windoWindth"+windoWindth);
	if(windoWindth<=800){
		$('.fa-google-plus').removeClass('fontsize');
		$('.shareicon a i').removeClass('fa-2x');
		$('.shareicon a i').addClass('fa-3x');
		
	}
	if(windoWindth>800){
			$('.shareicon a i').addClass('fa-2x');
		$('.shareicon a i').removeClass('fa-3x');
	}
	});
	
	$(window).resize(function(){
		
		
		if(windoWindth<=800){
		$('.shareicon a i').removeClass('fa-2x');
		$('.shareicon a i').addClass('fa-3x');
		
	}
	if(windoWindth>=800){
			$('.shareicon a i').addClass('fa-2x');
		$('.shareicon a i').removeClass('fa-3x');
	}
	});
	
		
	
	
});
