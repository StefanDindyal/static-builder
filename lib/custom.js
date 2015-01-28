$(function() {
	
	var windowWidth = $(window).width();
	setSineUpBtn();
	if (windowWidth <= 768) {
		$("#navbar a img").attr('src', 'images/mobileViewlogo.png');
		
	}
	$(window).scroll(function() {
	//console.log($(window).scrollTop());
	if (windowWidth <= 768)setFixedSineUpBtn();
	
		var $header = $("#navHeader");
		if ($header.length > 0) {
			var top = $header.offset().top;
			var height = $header.height();
			if ($(window).scrollTop() > top && $("#navHeader").hasClass('navbar-fixed-top') == false) {
				$("#applyAfterJquery").css('background-color', 'rgba(0,0,0,0)');
				$("#navHeader").addClass("navbar-fixed-top");
				$("#navHeader").css('background-color', 'rgba(0,0,0,0.5)');
				var CheckWidth = $(window).width();
				if (CheckWidth <= 768) {
					$("#navbar a img").attr('src', 'images/mobileRollover.png');
				} else {
					$("#navbar a img").attr('src', 'images/headerfloating.png');
				}
			}
			if ($(window).scrollTop() == 0 && $("#navHeader").hasClass('navbar-fixed-top') == true) {
				$("#navHeader").removeClass("navbar-fixed-top");
				$("#navHeader").css('background-color', 'rgba(0,0,0,0)');
				$("#navbar a img").attr('src', 'images/GoneBsyLogo.png');
				if (windowWidth <= 768) {
					$("#navbar a img").attr('src', 'images/mobileViewlogo.png');
				}

			}

		}
	});
	$(window).on("orientationchange", function(){
		console.log("hello");
   		setSineUpBtn();
	});
	$(window).resize(function() {
		var width = $(window).width();
		console.log(width);
		if (width <= 768) {
			$("#navbar a img").attr('src', 'images/mobileViewlogo.png');
		}
		else{			
			$("#navbar a img").attr('src', 'images/GoneBsyLogo.png');
		}

	});

	$('.respMenu').on("click", function() {
		$('.navBarLinks').toggle();		
		//console.log("navbar height", $("#navbar").height(), "navbar top", $("#navbar").offset().top);
		//console.log("calc", $("#navbar").height() + $("#navbar").offset().top);
	
			if ($(window).scrollTop() > 100) {
				$(".navBarLinks").css('background-color', 'rgba(0,0,0,0.5)');
				$(".padding0").css({
					"top" : $("#navbar").height(),
					"left" : 0
				});
				
			} else {
				$(".navBarLinks").css('background-color', 'rgba(0,0,0,0.5)');
				$(".padding0").css({
					"top" : $("#navbar").height(),
					"left" : 0
				});
			}
	 $(".fixedhead").toggleClass("backgroundColor");
			
	});
	function setSineUpBtn(){
		if(windowWidth<=768){
			// alert("hello");
			$(".appTpMArgin").css({
				"top" : $("#navbar").height(),
				"background":"transparent"
			});
		}
		
	}
	function setFixedSineUpBtn(){
		//alert("height body"+$(window).height());
		if($(window).scrollTop()>=100)
		{
			$(".appTpMArgin").find("button").css({
				"margin":"10px"
			});
			$(".appTpMArgin").css({
				"position":"fixed",
				'background':" -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 1%, rgba(0,0,0,0.65) 100%)",
				"background": "-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(1%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.65)))",
				"background": " -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,rgba(0,0,0,0.65) 100%)",
				"background": "-o-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,rgba(0,0,0,0.65) 100%)",
				"background":"  -ms-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,rgba(0,0,0,0.65) 100%)",
				"background":" linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,rgba(0,0,0,0.65) 100%)",
				"filter":" progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 )",
				"bottom":0,
				top:'auto'
			});
		}
		else{
			setSineUpBtn();
		}
	}
});

