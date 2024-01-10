/* в этот файл добавляет скрипты*/

const navToogle = document.querySelector('.main-nav__toggle');
const navPopup = document.querySelector('.main-nav');
const body = document.querySelector('.page__body');
const navLink = document.querySelector('.main-nav__link');

navToogle.onclick = function(e) {
  e.preventDefault();
  navPopup.classList.toggle('main-nav--closed');
  body.classList.toggle('page__body--noscroll');
};

navLink.onclick = function() {
  navPopup.classList.toggle('main-nav--closed');
  body.classList.remove('noscroll');
};
