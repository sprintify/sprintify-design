	//Bottom to top scroll
	$(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 54;
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
		});
	});


//Accordion
(function($) {
    // $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).next();
        // var dropDown = $(this).closest('li').find('p');

        // $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);


$().ready (function () {
	// setup ScrollReveal.js
	// https://github.com/jlmakes/scrollreveal.js
	window.sr = ScrollReveal();

	sr.reveal('.title-large', {
		duration: 2000,
    	distance: '100px',
		origin: 'bottom',
		scale: 1,
    	easing: 'cubic-bezier(.38,1.67,.56,1.06)',
		delay: 0,
    	reset: true
	});

	sr.reveal('.container-staff', {
		duration: 2000,
		distance: '100px',
		scale: 1,
		easing: 'cubic-bezier(0.16, 0.84, 0.44, 1)',
		delay: 1,
		viewFactor: 0.25,
		reset: true
	});

	sr.reveal('.intro-text', {
		duration: 100,
		origin: 'bottom',
		scale: 1,
    	rotate: { x: 0, y: 0, z: 0 },
		delay: 200,
    	easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
    	viewFactor: 0.2,
    	reset: true
	});

  // setup Images section scrollReveal
	sr.reveal('.title-medium', {
		duration: 1200,
    distance: '200px',
		origin: 'left',
		scale: 1,
    rotate: { x: 0, y: 0, z: 0 },
		delay: 200,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    viewFactor: 0.2,
    reset: true
	});

  sr.reveal('.accordion', {
		duration: 900,
    distance: '100px',
		origin: 'right',
		scale: 1,
    rotate: { x: 0, y: 0, z: 0 },
		delay: 200,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    viewFactor: 0.2,
    reset: true
	});

	// setup About section scrollReveal
	sr.reveal('', {
		duration: 600,
    distance: '20px',
		origin: 'bottom',
		scale: 1,
    rotate: { x: 0, y: 0, z: 0 },
		delay: 200,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    viewFactor: 0.2,
    reset: true
	});

  sr.reveal('.right-column', {
		duration: 1000,
    distance: '50px',
		origin: 'right',
		scale: 0.5,
    rotate: { x: 0, y: 0, z: 0 },
		delay: 400,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    viewFactor: 0.2,
    reset: true
	});

  /* Last Section */

  sr.reveal('#last', {
		duration: 1000,
    distance: '200px',
		origin: 'left',
		scale: 1,
    rotate: { x: 0, y: 0, z: 0 },
		delay: 400,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    viewFactor: 0.2,
    reset: true
	});

});
