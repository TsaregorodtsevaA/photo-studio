ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.769297, 37.638397],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        controls: [],
        zoom: 14
    },
    {
      // При сложных перестроениях можно выставить автоматическое
      // обновление карты при изменении размеров контейнера.
      // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
      // autoFitToViewport: 'always'
      searchControlProvider: 'yandex#search'
  });

    var myPlacemark = new ymaps.Placemark([55.769297, 37.638397], {}, {
      preset: 'islands#circleIcon',
      iconColor: '#FF6E30',
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42]
  });
    myMap.geoObjects.add(myPlacemark)
}
