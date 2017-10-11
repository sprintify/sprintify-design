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

	// setup Responsive section scrollReveal
	sr.reveal('.showcase-desktop-left, .showcase-iphone-left',{
		duration:2000,
		origin:'top',
		distance:'300px',
		reset: true
	});

	sr.reveal('.showcase-desktop-right, .showcase-iphone-right',{
		duration:2000,
		origin:'right',
		distance:'300px',
		reset: true
	});

	sr.reveal('.showcase-ipad-left',{
		duration:2000,
		origin:'left',
		distance:'300px',
		reset: true,
		ViewFactor:0.2
	});

	sr.reveal('.showcase-ipad-right',{
		duration:2000,
		origin:'right',
		distance:'300px',
		reset: true,
		ViewFactor:0.2
	});

	sr.reveal('.button-responsive',{
		duration:2000,
		delay:2000,
		origin:'bottom',
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

//Gallery codes for lightbox
$(document).ready(function(){
    $('header a').on('click', function(){
        // Current class assigniment
        $('header li.current').removeClass('current');
        $(this).parent().addClass('current');

        // Set heading text
        $('h1#heading').text($(this).text());

        // Get & filter link text
        var category = $(this).text().toLowerCase().replace(' ','-');

        // Remove hidden class if 'all-projects' is selected
        if(category == 'all-projects') {
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function(){
                if(!$(this).hasClass(category)){
                    $(this).hide().addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        // Stop link behaviour
        return false;
    });
});

//Footer accordion
$(document).ready(function() {

    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').hide();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').show();

            g.preventDefault();


        } );
    })(jQuery);

});

//smooth-scroll
$(document).ready(function() {
	var scrollLink = $('.scroll');
	//Smooth scrolling

	scrollLink.click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1300 )
	})
})
