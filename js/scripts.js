$(document).ready(function() {
    var width = $(window).width();
	$('a.projectLink').on('click', function(e) {		
		var url = $(this).attr('href') + ' #cnt';
		var content = $('#content');		
		$('#content .loadTarget').load(url, function(){
			content.fadeIn({
                duration: 330
            });
		});
		$('a.closeProject').css('top','0');
		$('body').addClass('noScroll');
		e.preventDefault();
	});
    $('a.closeProject').on('click', function(e) {
        var content = $('#content');
        $(this).css('top', '-100px');              		
		content.fadeOut(330, function(){
            $('.loadTarget').empty();
        });
		$('body').removeClass('noScroll');
        e.preventDefault();
    });
    var mainWrap = $('#mainWrap'),
    	introContainer = $('.introContainer'),
    	introText = $('#introText'),
    	body = $('body'),
		dropInfo = $('#dropInfo');
	$(window).load(function(){
        switchNav();
        scrollTop();
        if($(window).width() <= 900){
            mainWrap.removeClass('mainDown').addClass('mainUp');
            introContainer.addClass('introUp').removeClass('introDown');
            introText.removeClass('reveal').addClass('hide');
            dropInfo.removeClass('dropDown').addClass('dropUp');
            body.removeClass().addClass('white');
        }
    });
    $(window).scroll(function() {        
		scrollTop(); 
    });
    function scrollTop(){
    	var scroll = $(window).scrollTop();
        var bioY = $('#bio').position().top;
        var workY = $('#workWrap').position().top;
        var histY = $('#workHistory').offset().top;
        var contactY = $('#contactMe').offset().top;
        var bio = 80;
        var work = workY - ((histY - workY) / 2);
        var hist = histY - ((contactY - histY) / 2);
        var contact = contactY - 545;
        console.log(scroll +' : '+ bio + ' : '+ work);
        $('#nav li a').removeClass('active');        
        if(scroll >= bio && scroll < workY){            
            $('#nav li a.bio').addClass('active');            
        }
        else if(scroll >= work && scroll < hist ){
            $('#nav li a.work').addClass('active');            
        }
        else if(scroll >= hist && scroll < contact){ 
            $('#nav li a.history').addClass('active');
        }        
        else if(scroll >= contact){
            $('#nav li a.contact').addClass('active');
        }        
    	if ( scroll > 50 ) {
            mainWrap.removeClass('mainDown').addClass('mainUp');
            introContainer.addClass('introUp').removeClass('introDown');
            introText.removeClass('reveal').addClass('hide');
            dropInfo.removeClass('dropDown').addClass('dropUp');
            body.removeClass().addClass('white');

        } 
        if($(window).width() > 900){
            if ( scroll < 50 ) {
                mainWrap.removeClass('mainUp').addClass('mainDown');
                introContainer.removeClass('introUp').addClass('introDown');
                introText.removeClass('hide').addClass('reveal');
                dropInfo.removeClass('dropUp').addClass('dropDown');
                body.removeClass();
            } 
        }
    }   
    $('#nav a').on('click', function(e){
        e.preventDefault();
        var select = $(this).attr('href');
        var destination = ($(select).offset().top) - 140;   
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500, function(){
            var dropInfo = $('#dropInfo');
            var menuBurger = $('#menuBurger');        
            dropInfo.addClass('dropClose');
            dropInfo.removeClass('dropOpen');
        });
    });    
    $(window).resize(function(){
        switchNav();
    });
    function switchNav(){
        if($(window).width() <= 1024){
            $('#dropInfo').removeClass('desk');
            $('#dropInfo').addClass('mob');
            $('#dropInfo.mob').on('click', function(e) {
                e.preventDefault();
                var dropInfo = $('#dropInfo');
                var menuBurger = $('#menuBurger');
                console.log('mob-ok');
                if(dropInfo.hasClass('dropOpen')){
                    dropInfo.addClass('dropClose');
                    dropInfo.removeClass('dropOpen');
                } else {
                    dropInfo.addClass('dropOpen');
                    dropInfo.removeClass('dropClose');
                }
            });
        } else {
            $('#dropInfo').removeClass('mob');
            $('#dropInfo').addClass('desk');
            $('#dropInfo.desk').hover(function() {
                var dropInfo = $('#dropInfo');
                var menuBurger = $('#menuBurger');
                dropInfo.addClass('dropOpen');
                dropInfo.removeClass('dropClose');              
            }, function(){
                dropInfo.addClass('dropClose');
                dropInfo.removeClass('dropOpen');
            });
        }
    }
});