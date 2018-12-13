(function($) {
	'use strict';

	$(function() {

    var mainNav = $('.header__main-nav');
    var burger = $('.js-toggle-nav');
    var open = 'open';
    var overlay = $('.overlay');
    var modal = $('.modal');

    burger.on('click', function(e) {
      e.preventDefault();
      if (!modal.hasClass(open)) {
        mainNav.toggleClass(open);
        $(this).toggleClass(open);
        overlay.toggleClass(open);
      }
    });

    var closeNav = function () {
      mainNav.removeClass(open);
      burger.removeClass(open);
      overlay.removeClass(open);
    }

    // закрываем меню при клике на esc
    $(document).on('keyup', function(e) {
      if (e.keyCode == window.system.ESC) {
        closeNav();
      }
    });

	});
})(jQuery);
