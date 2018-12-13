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
