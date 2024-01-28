/* в этот файл добавляет скрипты*/


/* МОБИЛЬНОЕ МЕНЮ */

const navToogle = document.querySelector('.main-nav__toggle');
const navPopup = document.querySelector('.main-nav');
const body = document.querySelector('.page__body');
const navLink = document.querySelector('.main-nav__link');

navPopup.classList.remove('main-nav--nojs');

navToogle.onclick = function(e) {
  e.preventDefault();
  navPopup.classList.toggle('main-nav--closed');
  body.classList.toggle('page__body--noscroll');
};

navLink.onclick = function() {
  navPopup.classList.toggle('main-nav--closed');
  body.classList.remove('noscroll');
};


/* КАРТА */

document.addEventListener('DOMContentLoaded', () => {

  const ymaps = window.ymaps;
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
        center: [59.938679, 30.3230044],
        zoom: 14,
        controls: []
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/map-pin.png',
        iconImageSize: [57, 53],
        iconImageOffset: [-26, -42]
      });

    myMap.geoObjects.add(myPlacemark);
  });

});
