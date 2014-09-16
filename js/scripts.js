$(document).ready(function() {
  	// select all the links with class='lnk', when one of them is clicked, get its 'href' value
  	// adds a 'loading...' notification, load the content from that URL and
  	// place only the paragraph which is in the #cnt into the tag with id='content'
    var controller = $.superscrollorama({
            triggerAtCenter: false,
            playoutAnimations: true
        });

    controller.addTween('.projectItem', 
        TweenMax.from($('.projectItem'),.5,{
            css:{opacity:0}}),
            0, // scroll duration of tween (0 means autoplay)
            -180); // offset the start of the tween by 200 pixels

    var width = $(window).width();
	$('a.projectLink').on('click', function(e) {		
		var url = $(this).attr('href') + ' #cnt';
		var content = $('#content');
		console.log(url);
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
	// Fire when Dom is ready
	scrollTop();    
    $(window).scroll(function () {        
    	// Fire when Scrolling
		scrollTop(); 
    });
    function scrollTop(){
    	var scroll = $(window).scrollTop();
        var bioY = $('#bio').offset().top;
        var workY = $('#workWrap').offset().top;
        var histY = $('#workHistory').offset().top;
        var contactY = $('#contactMe').offset().top;
        var bio = bioY - 220;
        var work = workY - ((histY - workY) /2);
        var hist = histY - ((contactY - histY) /2);
        var contact = contactY - 545;
        console.log(bio+' '+work+' '+scroll);
        $('#nav li a').removeClass('active');        
        if(scroll >= 0 && scroll < bio){
            $('#nav li a').removeClass('active');                                   
        }
        else if(scroll >= bio && scroll < work){            
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

        } if ( scroll < 50 ) {
            mainWrap.removeClass('mainUp').addClass('mainDown');
            introContainer.removeClass('introUp').addClass('introDown');
            introText.removeClass('hide').addClass('reveal');
            dropInfo.removeClass('dropUp').addClass('dropDown');
            body.removeClass();
        } 
    }

    $('#dropInfo.desk').hover(function() {
        var dropInfo = $('#dropInfo');
        var menuBurger = $('#menuBurger');
        dropInfo.addClass('dropOpen');
        dropInfo.removeClass('dropClose');              
    }, function(){
        dropInfo.addClass('dropClose');
        dropInfo.removeClass('dropOpen');
    });

    $('#dropInfo.mob').on('click', function(e) {
        e.preventDefault();
        var dropInfo = $('#dropInfo');
        var menuBurger = $('#menuBurger');
        if(dropInfo.hasClass('dropOpen')){
            dropInfo.addClass('dropClose');
            dropInfo.removeClass('dropOpen');
        } else {
            dropInfo.addClass('dropOpen');
            dropInfo.removeClass('dropClose');
        }
    });

    $('#nav a').on('click', function(e){
        e.preventDefault();
        var select = $(this).attr('href');
        if(select == '#bio'){
            var destination = ($(select).offset().top) - 140;        
        } else {
            var destination = ($(select).offset().top) - 140;        
        }        
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);        
    });
    switchNav();
    $(window).resize(function(){
        switchNav();
    });
    function switchNav(){
        if(width <= 1024){
            $('#dropInfo').removeClass('desk');
            $('#dropInfo').removeClass('mob');
        } else {
            $('#dropInfo').removeClass('mob');
            $('#dropInfo').removeClass('desk');
        }
    }
});