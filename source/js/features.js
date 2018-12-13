(function($) {
	'use strict';
	$(function() {

    if (parseInt($(window).width()) < 768) {
      $('.js-slick-features').slick({
        infinite: true,
        arrows: true,
        dots: true,
        dotsClass: 'features__slick-dots slick-dots',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        swipeToSlide: true,
        centerMode: false,
        prevArrow: '<button class="features__slick-button features__slick-button_prev slick-button slick-button_prev" type="button"></button>',
        nextArrow: '<button class="features__slick-button features__slick-button_next slick-button slick-button_next" type="button"></button>',
      });
    }


	});
})(jQuery);
