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
});
