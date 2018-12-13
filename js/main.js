(function($) {
	'use strict';

	$(function() {

    var button = $('.js-button-top');
    button.on('click', function() {
      $("html, body").animate({scrollTop: 0}, "slow")
    })

	});
})(jQuery);

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

(function(){
  var mapСontent = document.querySelector("#map");
  if (mapСontent) {
    ymaps.ready(function () {
      var map = new ymaps.Map('map', {
        center: [55.802249, 37.549884],
        zoom: 16,
        scrollZoom: false,
        controls: []
      }, {
        searchControlProvider: 'yandex#search'
      }),
      Placemark = new ymaps.Placemark([55.802249, 37.549884], {
        balloonContent: 'Москва, 1-я улица 8 Марта, 3к2'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/fortuner/pin-icon.png',
        iconImageSize: [80, 46],
        iconImageOffset: [-40, -46],
      });

      map.geoObjects.add(Placemark);
      map.behaviors.disable('scrollZoom');
      map.controls.add('zoomControl');
      var roadcontrolState = map.controls.get('zoomControl').state.get('size');
      map.controls.get('zoomControl').options.set('size', 'small');
    });
  };
})();

(function($) {
	'use strict';

	$(function() {
    $('.js-date').mask("99/99/9999");
    $('.js-phone').mask("+7(999) 999-99-99");
	});

})(jQuery);

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

(function($) {
	'use strict';

	$(function() {

    window.objectFitImages();
    window.svg4everybody();

    window.system = {
      ESC: 27,
      MEDIUM: 767,
    }

	});
})(jQuery);
