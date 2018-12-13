(function($) {
	'use strict';

	$(function() {

    var button = $('.js-button-top');
    button.on('click', function() {
      $("html, body").animate({scrollTop: 0}, "slow")
    })

	});
})(jQuery);
