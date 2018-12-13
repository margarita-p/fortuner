(function($) {
	'use strict';

	$(function() {

    var buttonOpen = $('.js-open-order');
    var buttonClose = $('.js-close-modal');
    var modal = $('.modal');
    var overlay = $('.overlay');
    var open = 'open';
    var mainNav = $('.header__main-nav');

    var closeModal = function () {
      modal.removeClass(open);
      overlay.removeClass(open);
    };

    buttonOpen.on('click', function () {
      if (!mainNav.hasClass(open)) {
        modal.addClass(open);
        overlay.addClass(open);
      }
    });

    buttonClose.on('click', function () {
      closeModal();
    })

    // закрываем меню при клике на esc
    $(document).on('keyup', function(e) {
      if (e.keyCode == window.system.ESC) {
        closeModal();
      }
    });

	});
})(jQuery);
