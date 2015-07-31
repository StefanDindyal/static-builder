var succeedPass;

$(function(){			

	resumeTerm();

	$('.pass input').val('').focus();

	$('.pass').submit(function(){  
		var lookUp = $(this).find('input').val();
	  	if(lookUp == 'test'){
	  			succeedPass = true;				
				savePassword();
				$(this).find('.msg').text('OK!').css('color','lime');
			} else {
				$(this).find('input').val('');
				$(this).effect('shake',250);
				$(this).find('.msg').text('Wrong Password!').css('color','red');
			}        
	    return false;
	});		
	
	$('.dec').submit(function(){    		
		var regex = /eleanor|adrian|sheryl|claire|images|gerard|help/g;
	  	var lookUp = $(this).find('input').val();
	  	var matcher = lookUp.match(regex);	  		  	
	  	$('.index').removeClass('active');
	  	console.log(matcher)
	  	if (matcher) {
	  		var info = $('.index.'+lookUp);
	  		info.addClass('active');
	  		$(this).find('.msg').text('OK!').css('color','lime').fadeIn('250').delay('500').fadeOut('250');
	  	} else {	  		
	  		$(this).find('input').val('');
			$(this).effect('shake',250);
			$(this).find('.msg').text('Search_Error!').css('color','red').fadeIn('250').delay('500').fadeOut('250');
	  		$('.index.help').addClass('active');		  		
	  	}
		return false;
	});		
	
});

function unlock() {
	$('.front').hide();
	$('.nav').show().find('input').focus();
}

function supportsLocalStorage() {
    return ('localStorage' in window) && window['localStorage'] !== null;
}

function savePassword() {
    if (!supportsLocalStorage()) { return false; }
    localStorage["passed.word"] = succeedPass;
    unlock();
    return true;
}

function resumeTerm() {
    if (!supportsLocalStorage()) { return false; }
    succeedPass = (localStorage["passed.word"] == "true");    
    if (!succeedPass) { return false; }    
    savePassword();
    return true;
}