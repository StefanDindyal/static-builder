/**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/simple-parallax-scrolling-tutorial/
 */

(function($) {

	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
	setCyclerHeight();
	$window.resize(function(){
		setHeight();
		setElements();
		setCyclerHeight();
		
		if($window.width()>800){
			//alert("hello");
			if(isMobile.iOS()||isMobile.Android()){
				var temp=$('.modal-dialog')	.height();
				//alert(temp);		
			}
			else{
				var temp=$('.modal-dialog').css('height','645px');
			}
		}
		else{
			
			var temp=$('.modal-dialog').css('height','1400px');
			
		}
	});
	//FadeIn all sections
	$body.imagesLoaded(function() {
		setTimeout(function() {

			// Resize sections
			adjustWindow();

			// Fade in sections
			$body.removeClass('loading').addClass('loaded');

		}, 800);
	});

	function adjustWindow() {

		// Get window size
		winH = 430;
		winW = $window.width();

		// Keep minimum height 550
		if (winH <= 550) {
			winH = 550;
		}
		var isMobile = {
			Android : function() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry : function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS : function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera : function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows : function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any : function() {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};
		//set background attachment 
		if($window.width()>800){
			//alert("hello");
			if(isMobile.iOS()||isMobile.Android()){
				// var temp=$('.modal-dialog').css('height','1300px');	
				var temp=$('.modal-dialog')	.height();
				//alert(temp);		
			}
			else{
				var temp=$('.modal-dialog').css('height','645px');
			}
		}
		else{
			
			var temp=$('.modal-dialog').css('height','1400px');
			
		}
		if (isMobile.iOS()) {
			$(".bcg").css("background-attachment", "scroll");
			
			setElements();

		} else {
			$(".bcg").css("background-attachment", "fixed");
		}
		// Init Skrollr for 800 and up
		if (winW >= 800) {

			// Init Skrollr
			var s = skrollr.init({
				forceHeight : false,
				smoothScrolling : true,
				smoothScrollingDuration : 500
			});

			// Resize our slides
			$slide.height(winH);

			s.refresh($('.homeSlide'));

		} else {

			// Init Skrollr
			var s = skrollr.init();
			s.destroy();
		}
		setHeight();
		$(window).on("orientationchange", function() {
			setHeight();
			setElements();
			setCyclerHeight();
		});


		// Check for touch
		if (Modernizr.touch) {

			// Init Skrollr
			var s = skrollr.init();
			s.destroy();
		}

	}

	function initAdjustWindow() {
		return {
			match : function() {
				adjustWindow();
			},
			unmatch : function() {
				adjustWindow();
			}
		};
	}

	function setHeight() {
		if($window.width() <= 360){
			$("#slide-8").css("height", 700);
			$("#slide-9").css("height", 650);
			$("#slide-10").css("height", 1350);
			$("#slide-11").css("height", 830);
			$("#slide-12").css("height", 1130);
		}
		else if($window.width() <= 580){
			$("#slide-8").css("height", 700);
			$("#slide-9").css("height", 650);
			$("#slide-10").css("height", 1500);
			$("#slide-11").css("height", 830);
			$("#slide-12").css("height", 950);
		}
		else if ($window.width() <= 800) {
			$("#slide-8").css("height", 875);
			$("#slide-9").css("height", 765);
			$("#slide-10").css("height", 1550);
			$("#slide-11").css("height", 830);
			$("#slide-12").css("height", 1130);
		} else {
			$("#slide-8,#slide-9").css("height", 550);
			$("#slide-9").css("height", 550);
			$("#slide-10").css("height", 745);
			$("#slide-11").css("height", 550);
			$("#slide-12").css("height", 654);
		}
	}
	function setElements(){
		if ($window.width() > 800){
				// $("#slide-10").find(".hsContent").css("margin","auto");
				$("#slide-10").find(".imges,.rightImg").width('20%');
				$("#slide-10").find(".imges").css("left",'70%');
				$("#slide-10").find(".rightImg").css("left",'63%');
				$("#slide-10").find(".anim").width('100%');
				//$("#slide-9").find(".padding").css("padding","0px 0px 0px 6%");
			}
			else {				
				// $("#slide-12").find(".upper").css({
					// "position":"absolute",
					// "top":$(".lower").height(),
					// "left":0
				// });
			}
	}
	function setCyclerHeight(){
		setTimeout(function(){
			var ht=$("#imageToHide").height();
		 $('#cycler').height(ht);
		},1000);
		 $("#imageToHide").hide();
	}

	enquire.register("screen and (min-width : 800px)", initAdjustWindow(), false);
	 // var ht=$("#imageToHide").height();
	 // console.log(ht); 
	 // $('#cycler').height(ht);
	 // $("#imageToHide").hide();
	// });
} )(jQuery);
