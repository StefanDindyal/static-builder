// Animation Run Scripts
////////////////////////////////////////////

// global controller variable
var controller;

// initialize the general controller settings
controller = new ScrollMagic({
	globalSceneOptions: {
		reverse: false
	}
});

// the general options for the scene
var sceneOptions = {duration: 0, offset: -100};

// jQuery document ready
jQuery(function($){	

	// sign animation
	var sign = new TimelineMax({repeat:-1})
		// rotate the first message in (The first message must be rotated in to complete the animation loop)
		.add(TweenMax.from(".sign .one", 0.33, {rotationX:90, opacity:0, transformOrigin:"center center", ease:Quad.easeOut}))
		// rotate the first message out
		.add(TweenMax.to(".sign .one", 0.33, {rotationX:-90, opacity:0, transformOrigin:"center center", ease:Quad.easeOut, delay:0.7}))
		// rotate the second message in
		.add(TweenMax.from(".sign .two", 0.33, {rotationX:90, opacity:0, transformOrigin:"center center", ease:Quad.easeOut}))
		// rotate the second message out
		.add(TweenMax.to(".sign .two", 0.33, {rotationX:-90, opacity:0, transformOrigin:"center center", ease:Quad.easeOut, delay:0.7}))
		// rotate the third message in
		.add(TweenMax.from(".sign .three", 0.33, {rotationX:90, opacity:0, transformOrigin:"center center", ease:Quad.easeOut}))
		// rotate the third message out
		.add(TweenMax.to(".sign .three", 0.33, {rotationX:-90, opacity:0, transformOrigin:"center center", ease:Quad.easeOut, delay:0.7}));		

	/////////////////////////////////////////////////		

	// faces animation

	// the duration of each animation
	var animation_duration = 0.33;

	// the time to wait before the next role animates
	var animation_pause = "2";

	// get each face
	var face_elements = $('.faces .face');	
	
	// pick a face at random
	function random_face(faces){
		rand = faces[Math.floor(Math.random()*faces.length)];
		return rand;
	}	

	var faces = new TimelineMax()
		// slide up the carpenter role		
		.add([				
				TweenMax.from('.roles .carpenter', animation_duration, {bottom: '-100%', opacity: 0, ease: Quad.easeOut}),
				TweenMax.to(face_elements, animation_duration, {opacity: 0, ease: Quad.easeInOut}),
				TweenMax.to(random_face(face_elements), animation_duration, {opacity: 1, ease: Quad.easeInOut})
			])
		// carpenter to librarian transition
		.add([
				TweenMax.to('.roles .carpenter', animation_duration, {bottom: '100%', opacity: 0, ease: Quad.easeInOut}),
				TweenMax.from('.roles .librarian', animation_duration, {bottom: "-100%", opacity: 0, ease: Quad.easeInOut}),
				TweenMax.to(face_elements, animation_duration, {opacity: 0, ease: Quad.easeInOut}),
				TweenMax.to(random_face(face_elements), animation_duration, {opacity: 1, ease: Quad.easeInOut})	
			], "+="+animation_pause)
		// librarian to chef transition
		.add([
				TweenMax.to('.roles .librarian', animation_duration, {bottom: '100%', opacity: 0, ease: Quad.easeInOut}),
				TweenMax.from('.roles .chef', animation_duration, {bottom: "-100%", opacity: 0, ease: Quad.easeInOut}),
				TweenMax.to(face_elements, animation_duration, {opacity: 0, ease: Quad.easeInOut}),
				TweenMax.to(random_face(face_elements), animation_duration, {opacity: 1, ease: Quad.easeInOut})	
			], "+="+animation_pause)
		// chef to coach transition	
		.add([
				TweenMax.to('.roles .chef', animation_duration, {bottom: '100%', opacity: 0, ease: Quad.easeInOut}),
				TweenMax.from('.roles .coach', animation_duration, {bottom: "-100%", opacity: 0, ease: Quad.easeInOut}),
				TweenMax.to(face_elements, animation_duration, {opacity: 0, ease: Quad.easeInOut}),
				TweenMax.to(random_face(face_elements), animation_duration, {opacity: 1, ease: Quad.easeInOut})
			], "+="+animation_pause)
		// coach to stylist transition
		.add([
				TweenMax.to('.roles .coach', animation_duration, {bottom: '100%', opacity: 0, ease: Quad.easeInOut}),
				TweenMax.from('.roles .stylist', animation_duration, {bottom: "-100%", opacity: 0, ease: Quad.easeInOut}),
				TweenMax.to(face_elements, animation_duration, {opacity: 0, ease: Quad.easeInOut}),
				TweenMax.to(random_face(face_elements), animation_duration, {opacity: 1, ease: Quad.easeInOut})
			], "+="+animation_pause);

	// faces scroll trigger
	new ScrollScene(sceneOptions)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement('.faces')
		.setTween(faces);

	/////////////////////////////////////////////////		

	// basic/pro animation

	// roll in basic
	new ScrollScene(sceneOptions)
		.offset(-200)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement('.types') // use previous element as trigger, as top position changes during spin
		.setTween(TweenMax.from('.burst .basic', 1, {rotation:360, left:100, opacity:0, ease: Quad.easeInOut}));	
	// roll in pro
	new ScrollScene(sceneOptions)
		.offset(-200)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement('.types') // use previous element as trigger, as top position changes during spin
		.setTween(TweenMax.from('.burst .pro', 1, {rotation:360, left:100, opacity:0, ease: Quad.easeInOut, delay: 1}));	

	/////////////////////////////////////////////////		

	// door animation
	var door = new TimelineMax()
		// slide in door
		.add(TweenMax.from('.door', 2, {marginRight: -520, ease: Power4.easeIn}))
		// rotate hanging
		.add(TweenMax.to(".door .hanging", 0.5, {rotation:60, transformOrigin:"top center"}))
		.add(TweenMax.to(".door .hanging", 0.5, {rotation:-40, transformOrigin:"top center"}))	
		.add(TweenMax.to(".door .hanging", 0.5, {rotation:25, transformOrigin:"top center"}))	
		.add(TweenMax.to(".door .hanging", 0.5, {rotation:-15, transformOrigin:"top center"}))	
		.add(TweenMax.to(".door .hanging", 0.5, {rotation:10, transformOrigin:"top center"}))	
		.add(TweenMax.to(".door .hanging", 0.5, {rotation:-5, transformOrigin:"top center"}))	
		.add(TweenMax.to(".door .hanging", 0.5, {rotation:3, transformOrigin:"top center"}))	
		.add(TweenMax.to(".door .hanging", 0.5, {rotation:0, transformOrigin:"top center"}));

	// door scroll trigger

	new ScrollScene(sceneOptions)
		.addTo(controller)
		.triggerHook("onCenter")
		.triggerElement('.door')
		.setTween(door);

	/////////////////////////////////////////////////		

	// carousel	
	var carouselSceneOptions = {duration: 200, offset: -100};
	var carouselController = new ScrollMagic({
		globalSceneOptions: {

		}
	});
	var cTime = 10;
	var icon = new TimelineMax({repeat:-1});
	icon.add([
		TweenMax.fromTo($('.carousel.sm .path'), cTime, {rotationZ:0}, {rotationZ:360, ease: Linear.easeNone}),
  		TweenMax.fromTo($('.carousel.sm .path .icon'), cTime, {rotationZ:0, rotationX:90, scale: 1, opacity: 1}, {rotationZ:-360,rotationX:90, scale: 1, opacity: 1, ease: Linear.easeNone})
	]);
			
	// carousel scroll trigger
	new ScrollScene(carouselSceneOptions)
		.addTo(carouselController)
		.triggerHook("onCenter")
		.triggerElement('.carousel.sm')
		.setTween(icon);
	
});