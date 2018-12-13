(function($) {
	'use strict';

	$(function() {

    var header = $('.header');
    var fixedClass = 'fixed';
    var SCROLL_HEIGHT = 300;

    $(window).scroll(function(){
      if ( $(this).scrollTop() > SCROLL_HEIGHT ){
        header.addClass(fixedClass);
      } else if($(this).scrollTop() <= SCROLL_HEIGHT && header.hasClass(fixedClass)) {
        header.removeClass(fixedClass);
      }
    });

	});
})(jQuery);
