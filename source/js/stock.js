(function($) {
	'use strict';

	$(function() {

    var button = $('.js-button-stock');
    var stock = '.js-stock';
    var content = $('.js-content-stock');
    var open = 'open';

    button.click(function () {
      $(this).parents(stock).find(content).toggleClass(open);
      $(this).toggleClass(open);
    })

	});
})(jQuery);
