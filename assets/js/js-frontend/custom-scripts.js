jQuery( document ).ready( function ( $ ) {
	
	// Initialise the scroll animation plugin.
	// See it's bundle at scripts/vendor/aos.min.js
	AOS.init({
		duration: 600,
		delay: 100
	});

	// grab an element
	var myHeader = document.querySelector("#masthead");
	
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myHeader, { 
	  "offset": 90,
	  tolerance : {
			up : 5,
			down : 0
		}
	}); 

	// initialise 
	headroom.init(); 

	//hero animated text
	$('#blinktext').typeIt({
	    speed: 50,
	    autoStart: false 
	});

	//owl slider
	$('.owl-carousel-projects').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass:true,
		dots: true,
		nav: true,
		navText: ['<img src="'+location.href +'wp-content/themes/dripcreative/assets/images/nav_prev.png" alt="" /> previous','next <img src="'+ location.href +'wp-content/themes/dripcreative/assets/images/nav_next.png" alt="" />'],
		autoplay: true,
		items: 1,
		stagePadding: 0,
	});

	// Initialise the scroll animation plugin.
	// See it's bundle at js/vendor/aos.min.js
	AOS.init({
		duration: 600,
		delay: 100
	});

	//smooth scrool
	$("html").niceScroll( {
		"scrollspeed ": 10,
	});
});
