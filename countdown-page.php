<?php
	/* Template Name: MONSTER IV Countdown */
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>MONSTER IV: Countdown</title>
	<meta name="description" content="Countdown to the MONSTER IV: Art Show &amp; Halloween Party">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,600,700" rel="stylesheet">
	<link rel="stylesheet" href="<?php bloginfo('template_directory');?>/countdown/main.css">
	<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory');?>/countdown/pace.css">
</head>
<body>
	<div class="outer">
		<div id="clockdiv">
			<div class="logo">
				<a href="http://www.arkgalleries.com/home"><img src="<?php bloginfo('template_directory');?>/countdown/MONSTER-IV-Mast.png" alt="MONSTER IV: Art Show &amp; Halloween Party" border="0"/></a>
			</div>
			<div class="counter">
				<ul>
					<li><span class="days"></span>days</li>
					<li><span class="hours"></span>hours</li>
					<li><span class="minutes"></span>minutes</li>
					<li><span class="seconds"></span>secs</li>
				</ul>
			</div>
			<!-- <div class="tickets">
				<a href="http://www.arkgalleries.com/MONSTER">Tickets</a>
			</div> -->
			<div class="home">
				<a href="http://www.arkgalleries.com/home">Continue to Arkgalleries.com</a>
			</div>
		</div>
	</div>
	<div id="video">
		<video id="video1" preload="auto" loop>
			<source src="" type="video/mp4">
			Your browser does not support the video tag.
		</video>
	</div>
	<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script type="text/javascript">
		var videoSrc = '<?php bloginfo('template_directory');?>/countdown/countdown-vid.mp4';
		var videoFb = '<?php bloginfo('template_directory');?>/countdown/video-fallback.jpg';
	</script>
	<script src="<?php bloginfo('template_directory');?>/countdown/pace.min.js" type="text/javascript"></script>
	<script src="<?php bloginfo('template_directory');?>/countdown/scripts.js" type="text/javascript"></script>
</body>
</html>