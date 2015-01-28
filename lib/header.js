$width = $(window).width();
$height= $(window).height();
var nav = $('body');
var scrolled = false;
$(function() {
	//alert("first" +$(".leftBar").height());
	$(".rightBar").height($(".leftBar").height());
	setSubmitStn();
	//alert("width"+$width+"height"+$height);
	
});
$(".cbtn").on("click", function() {
		$(".leftBar").toggleClass("bacggroundUl");
	});
$(window).scroll(function() {
	
	var leftbar = $(".leftBar");
	var rightBar = $(".rightBar");
	var wrapper = $(".wrapper");
	
	if ($width > 800) {
		
		setHeader();
		rightBar.removeClass("fixed");
		$(".signUp").css("margin","13% auto");
		if ($(window).scrollTop() < 50) {
			// leftbar.find("img").animate({"max-width": "100%" }, 200 );
			rightBar.removeClass("navbar-fixed-bottom");
			leftbar.removeClass("navbar-fixed-top") ;
			rightBar.removeClass("navbar-fixed-top") ;
			// alert("first" +$(".leftBar").height());
			$(".rightBar").height($(".leftBar").height());
			rightBar.removeClass("fixedRightBar");

		} else {
			leftbar.addClass("navbar-fixed-top") ;
			// .animate({
			  // top: 0
			// }, 500 );;
			// leftbar.find("img").animate({"max-width": "80%" }, 200 );
			// alert("second" +$(".leftBar").height());
			 $(".rightBar").height($(".leftBar").height());
			rightBar.addClass("navbar-fixed-top") ;
			// .animate({
			  // top: 0
			// }, 500 );;
			rightBar.addClass("fixedRightBar");
			rightBar.removeClass("navbar-fixed-bottom");
		}
	} else {
		rightBar.removeClass("animateNav");
		setHeader();
		if ($(window).scrollTop() < 50) {
			leftbar.removeClass("navbar-fixed-top");
			rightBar.removeClass("navbar-fixed-bottom") ;
			rightBar.removeClass("navbar-fixed-top") ; 	
			rightBar.addClass("fixed");
			//$(".signUp").css("margin","16% auto");

		} else {
			leftbar.addClass("navbar-fixed-top") ;
			// .animate({
			  // top: 0
			// }, 500 );
			rightBar.removeClass("fixed");
			rightBar.addClass("navbar-fixed-bottom") ;
			$(".signUp").css("margin","0% auto 3%");
		}
		if($width <=640)
		{	
			//alert("hello");
			if($(window).scrollTop() < 50){
				$(".signUp").css("margin","13% auto 0%");
			}
			else{
				$(".signUp").css("margin","1% auto 1%");
			}
		}
		else if(($width > 640)&& ($width <= 800)){
			if($(window).scrollTop() < 50){
				$(".signUp").css("margin","13% auto 0%");
			}
			else{
				$(".signUp").css("margin","3% auto 0%");
			}
		}
		else{
			$(".signUp").css("margin","13% auto");
		}
		
	}
});

$(window).resize(function() {
	var leftbar = $(".leftBar");
	var rightBar = $(".rightBar");
	var wrapper = $(".wrapper");
	$width = $(window).width();

	setSubmitStn();
	$(window).scroll(function() {
		
		
		if($width>800){
		rightBar.addClass("animateNav");
		if($(window).scrollTop() < 50){	
			setHeader();
			rightBar.removeClass("navbar-fixed-bottom") ;
			leftbar.removeClass("navbar-fixed-top") ;
			leftbar.removeClass("bacggroundUl");
			rightBar.removeClass("navbar-fixed-top") ;
		}
		else{
			rightBar.removeClass("navbar-fixed-bottom");
			leftbar.addClass("navbar-fixed-top") ;
			// .animate({
			  // top: 0
			// }, 500 );
			rightBar.addClass("navbar-fixed-top") ;
			// .animate({
			  // top: 0
			// }, 500 );
		}
	}
	else{
		//alert("hello");
		rightBar.removeClass("animateNav");
		if($(window).scrollTop() < 50){
			setHeader();
			leftbar.removeClass("navbar-fixed-top") ;
			rightBar.removeClass("navbar-fixed-bottom") ;
			
		}
		else{
			rightBar.removeClass("fixed");
			leftbar.addClass("navbar-fixed-top") ;
			// .animate({
			  // top: 0
			// }, 500 );
							// //alert("gt 100");
			rightBar.removeClass("navbar-fixed-top") ;
			rightBar.addClass("navbar-fixed-bottom") ;
			// .css({
				// "bottom":"0%",
			// });
		}
		if($width <=640)
		{
			//alert("hello");
			if($(window).scrollTop() < 50){
				$(".signUp").css("margin","13% auto 0%");
			}
			else{
				$(".signUp").css("margin","1% auto 1%");
			}
		}
		else if(($width > 640)&& ($width <= 800)){
			
			if($(window).scrollTop() < 50){
				$(".signUp").css("margin","13% auto 0%");
			}
			else{
				$(".signUp").css("margin","3% auto 0%");
			}
		}
		else{
			$(".signUp").css("margin","13% auto");
		}
	}
	});	
});
function setSubmitStn() {
	var leftbar = $(".leftBar");
	var rightBar = $(".rightBar");
	var wrapper = $(".wrapper");
	if ($width > 800) {
		rightBar.removeClass("fixed");
		$(".leftBar").css("background-position-y", "-100px");
		if ($(window).scrollTop() < 50) {
			rightBar.removeClass("navbar-fixed-bottom") ;
			rightBar.removeClass("fixedRightBar");
			leftbar.removeClass("bacggroundUl");
		} else {
			rightBar.removeClass("navbar-fixed-bottom");
			rightBar.addClass("fixedRightBar");
			rightBar.addClass("navbar-fixed-top") ;
			// .animate({
			  // top: 0
			// }, 500 );
			//alert("third" +$(".leftBar").height());
			$(".rightBar").height($(".leftBar").height());
			$(".signUp").css("margin","13% auto");
		}
	} else {
		
		if ($(window).scrollTop() < 50) {
			rightBar.addClass("fixed");
		} else {
			rightBar.removeClass("fixed");
			//$(".signUp").css("margin","auto");
			$(".signUp").css("margin","1% auto 1%");
		}
		if($(".navbar-collapse").hasClass("in")){
			
			leftbar.addClass("bacggroundUl");
		}
	}
}
function setHeader(){
	//alert("hello");
	if (50 < $(window).scrollTop() && !scrolled) {
    nav.addClass('fixedBody'); 
    if($width>800)
    {
	  	$(".leftBar").find("img").animate({"max-width": "80%" }, 100 );
    }
  	
    $('.animateNav').animate({"background-position-y": "0px"},200);
    scrolled = true;
  }
  if (50 > $(window).scrollTop() && scrolled) {
  	if($width>800){
	    $(".leftBar").find("img").animate({"max-width": "100%" }, 100 );
  	}
    $('.animateNav').animate({"background-position-y": "-100px"}, 200, function() {
        nav.removeClass('fixedBody');
        $('.animateNav').removeAttr('style');
    });
    scrolled = false;
  }
  // if($(window).width()<800){
  	// $(".rightBar").removeClass("animateNav");
  // }
  // else{
  	// $(".rightBar").addClass("animateNav");  	
  // }
}
