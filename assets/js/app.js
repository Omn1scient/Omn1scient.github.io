/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
//import * as flsFunctions from "./modules/functions.js";
//flsFunctions.isWebp();

//import './libs.js'



function ready() {
  // smooth page appearing
  /*
  let pageBody = document.querySelector('body');
  pageBody.style.opacity = "0";

  setTimeout(pageLoadOpacity, 100);

  function pageLoadOpacity() {
    pageBody.style.opacity = "1";
    pageBody.style.transition = "all .3s ease";

    setTimeout(() => pageBody.style.transition = null, 1000);
  }

  */


  //$('.phoneMask').mask('7 (999) 999-99-99');
}

document.addEventListener("DOMContentLoaded", ready);


// Получаем все элементы .nav-item__dropdown
let dropdownItems = document.querySelectorAll('.nav-item__dropdown');

// Обходим все элементы
dropdownItems.forEach(function(item) {
  // Находим соответствующий выпадающий список
  let dropdownList = item.querySelector('.navbar__dropdown-list');

  // При наведении на элемент
  item.addEventListener('mouseover', function() {
    // Вычисляем высоту списка
    let listHeight = dropdownList.scrollHeight;
    // Применяем вычисленную высоту к стилям списка
    dropdownList.style.maxHeight = listHeight + 'px';
  });

  // При уходе мыши с элемента
  item.addEventListener('mouseout', function() {
    // Сбрасываем значение max-height
    dropdownList.style.maxHeight = '';
  });
});


// smooth scrolling to anchor
$(document).on('click', 'a[data-scroll^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: ($($.attr(this, 'data-scroll')).offset().top - 100)
  }, 700);
});

/*

let swiper = new Swiper(".mySlider", {
  slidesPerView: 3,
  spaceBetween: 5,
  grid: {
    rows: 3,
    fill: "row",
  },

  breakpoints: {
    576: {
      slidesPerView: 4,
      grid: {
        rows: 3,
        fill: "row",
      },
    },

    768: {
      slidesPerView: 4,
      grid: {
        rows: 3,
        fill: "row",
      },
    },
    992: {
      slidesPerView: 4,
      grid: {
        rows: 4,
        fill: "row",
      },
    },
    1200: {
      slidesPerView: 4,
      grid: {
        rows: 3,
        fill: "row",
      },
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique',
  },
});

*/


// Получаем все элементы .tab-pane
let tabPanes = document.querySelectorAll('.tab-pane');

// Перебираем каждый элемент .tab-pane
tabPanes.forEach(function(tabPane) {
  // Добавляем обработчик события swipe к каждому элементу .tab-pane
  tabPane.addEventListener('touchstart', handleTouchStart, false);
  tabPane.addEventListener('touchmove', handleTouchMove, false);

  // Сохраняем начальные координаты касания
  let startX;

  // Обработчик touchstart события
  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  // Обработчик touchmove события
  function handleTouchMove(event) {
    if (!startX) return;

    let currentX = event.touches[0].clientX;
    let diffX = startX - currentX;

    let ariaLabelledby;
    let navLink;
    let nextSlide;
    let prevSlide;

    // Если свайп влево
    if (diffX > 100) {
      // Находим значение атрибута aria-labelledby
      ariaLabelledby = tabPane.getAttribute('aria-labelledby');

      // Находим элемент .nav-link на основе значения id и атрибута aria-labelledby
      navLink = document.querySelector('.nav-link[id="' + ariaLabelledby + '"]').parentNode;

      // Проверяем, есть ли следующий соседний элемент
      if (navLink.nextElementSibling) {
        nextSlide = navLink.nextElementSibling.querySelector('.nav-link');

        // Эмулируем клик на элементе .nav-link
        nextSlide.click();
      }

      // Если свайп вправо
    } else if (diffX < -100) {
      // Находим значение атрибута aria-labelledby
      ariaLabelledby = tabPane.getAttribute('aria-labelledby');

      // Находим элемент .nav-link на основе значения id и атрибута aria-labelledby
      navLink = document.querySelector('.nav-link[id="' + ariaLabelledby + '"]').parentNode;

      // Проверяем, есть ли предыдущий соседний элемент
      if (navLink.previousElementSibling) {
        prevSlide = navLink.previousElementSibling.querySelector('.nav-link');

        // Эмулируем клик на элементе .nav-link
        prevSlide.click();
      }
    }
  }
});


$(window).scroll(function() {
  var footerHeight = $('footer').height();
  var scrollTop = $(window).scrollTop();
  var pageHeight = $(document).height();
  var bottomDifference = pageHeight - footerHeight;

  if (scrollTop >= 300 && scrollTop < bottomDifference - 500) {
    $('.to-top').addClass('show');
  } else {
    $('.to-top').removeClass('show');
  }
});

$('.to-top').click(function() {
  $("html, body").animate({ scrollTop: 0 }, 300, 'swing');
  return false;
});
/******/ })()
;