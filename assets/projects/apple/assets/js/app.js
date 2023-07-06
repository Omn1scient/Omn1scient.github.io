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


//import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';


function ready() {
  $(document).on('click', '.phoneMask', function () {
    $('.phoneMask').mask('X (999) 999-99-99', {
      translation: {
        'X': {
          pattern: /[7-8]/
        }
      }
    });
  })
}

document.addEventListener("DOMContentLoaded", ready);


// M-menu
const menu = new Mmenu( "#mobile-menu", {
  "offCanvas": {
    "position": "left-front"
  },
  "navbar": {
    "title": "Меню"
  },
  hooks: {
    "openPanel:before": ( panel ) => {
      console.log( "Started opening pane: " + panel.id );
    },
  },
  "theme": "white",
});

const api = menu.API;
var openButton = document.querySelector("#open-button");
var closeButtons = document.querySelectorAll(".menu-close-button");

openButton.addEventListener("click", () => {
    api.open();
  }
);

closeButtons.forEach(closeButton => {
  closeButton.addEventListener('click', () => {
    api.close();
  })
})



// Tabs-block
if (document.querySelector('.tabs-nav')) {
  $(document).on('click', '.tabs-container li', function(event){
    $('.tabs-container li').removeClass('active').removeClass("prev");
    if (window.innerWidth < 992) {
      $('.tabs-container ul').toggleClass('expanded');
    }
    $(this).addClass('active').prev("li").toggleClass("prev");
    var tab_id = $(this).attr('data-tab');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $('#'+tab_id).addClass('current');
  });

  $('.tabs-container ul').on('focusout', function () {
    if (window.innerWidth < 992) {
      $('.tabs-container ul').removeClass('expanded');
    }
  });
}


// Category cards
if (document.querySelector('.category-cards')) {
  let categoryCards = document.querySelectorAll('.category-cards__wrap [class^="col"]');
  let cardNum = 1;

  let cardsArrray = Array.from(categoryCards)

  for (var c = 0; c < categoryCards.length; c++) {

    // if cards = 3, 5, 7, 9, etc, to three of last children add class
    if(window.innerWidth > 767 && window.innerWidth < 1200) {
      cardNum = cardNum + 2;

      if (categoryCards.length === cardNum) {
        let slicedArray = cardsArrray.slice(-3);

        slicedArray.forEach(element => {
          element.classList.add('col-md-4', 'category-cards__mini-col')
        });
      }
      // if cards = 4, 7, 10, 13, etc, to four of last children add class
    } else if (window.innerWidth > 1199) {
      cardNum = cardNum + 3;

      if (categoryCards.length === cardNum) {
        let slicedArray = cardsArrray.slice(-4);

        slicedArray.forEach(element => {
          element.classList.remove('col-xl-4')
          element.classList.add('col-xl-3', 'category-cards__mini-col')
        });
      }
    }
  }
}



var swiper = new Swiper(".photos_slider .mySwiper", {
  spaceBetween: 30,
  //centeredSlides: true,
  autoplay: {
    //delay: 3000,
    //disableOnInteraction: true,
  },
  loop: false,
  draggable: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




// all prices
if (document.querySelector('.all-prices') !== null) {
  $('.all-prices__opener').click(function (){
    $(this).toggleClass('active');
    $(this).next('.all-prices__dropdown').slideToggle();
  });
}


/*
// review fake modal
let modalReview = new bootstrap.Modal(document.getElementById('modalReview'))
let modalReviewSuccess = new bootstrap.Modal(document.getElementById('modalSuccessReview'))

var modalReviewBtnSubmit = document.querySelector('#modalReview .request-form__element button');
let reviewersName = document.querySelector('#modalReview input');
let reviewersMessage = document.querySelector('#modalReview textarea');


function valueReset() {
  modalReviewSuccess.show();
  reviewersName.value = '';
  reviewersMessage.value = '';
}

modalReviewBtnSubmit.addEventListener('click', function(evt) {
  if (reviewersMessage.value !== '') {
    evt.preventDefault();
    modalReview.hide();
    setTimeout(valueReset, 800);
  }
})



 */



/*
// M-menu
var menu = new MmenuLight(
  document.querySelector( '#mobile-menu' ),
  'all'
);


var navigator = menu.navigation({
  // selectedClass: 'Selected',
  // slidingSubmenus: true,
  theme: 'light',
  title: ' '
});


var drawer = menu.offcanvas({
  position: 'left'
});







var menuItem = document.querySelectorAll('.mobile-menu__list li span');

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    setTimeout(itemSelectCheck, 100);
  })
})

function itemSelectCheck() {
  if (!document.querySelector('.mm-spn.mm-spn--light.mm-spn--navbar').classList.contains('mm-spn--main')) {
    console.log('item opened')
  } else {
    console.log('item closed')
  }
}

*/

/*
const menu = new Mmenu( "#mobile-menu" );

// Get the API
const api = menu.API;

// Invoke a method
const panel = document.querySelector( "#panel" );
api.openPanel( panel );

*/

/*
//	Open & close mobile menu.
document.querySelector('a[href="#mobile-menu"]').addEventListener( 'click', function(evt) {
  evt.preventDefault();

  if (document.querySelector('body').classList.contains('mm-ocd-opened')) {
    drawer.close();
  } else {
    drawer.open();
  }
})


 */


// Simplebar
if (document.querySelector('.custom-scrollbar') !== null) {
  var customScrollbar = document.querySelectorAll('.custom-scrollbar');

  for (var i = 0; i < customScrollbar.length; i++) {
    new SimpleBar(customScrollbar[i], {
      autoHide: false,
      scrollbarMinSize: 10,
      scrollbarMaxSize: 35
    })
  }
}




/******/ })()
;