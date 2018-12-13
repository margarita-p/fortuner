(function($) {
	'use strict';

	$(function() {

    var button = $('.js-button-dropdown');
    var dropdownClass = '.js-dropdown';
    var textContent = $('.text-dropdown');
    var openClass = 'open';

    button.click(function () {
      $(this).parents(dropdownClass).find(textContent).toggleClass(openClass);
      $(this).toggleClass(openClass);
    })

	});
})(jQuery);
