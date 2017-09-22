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

   //Burger
	$(document).ready(function(){
	    //   jQuery slideToggle and toggleClass to enable on/off click events

	    $('#hamburger').on('click', function(){
	        $('#dropdown').slideToggle();
	        $('.line-1, .line-2, .line-3').toggleClass('active');
	    });
	});

	$( document ).ready(function() {
	 $(".touch-styles").removeClass("touch-styles");
	 });

	/*$(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 54;
			 if ($(window).scrollTop() > navHeight) {
				 $('header').addClass('fixed2');
			 }
			 else {
				 $('header').removeClass('fixed2');
			 }
		});
	});

	/* (function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);
*/
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
