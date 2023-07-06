//import * as flsFunctions from "./modules/functions.js";
//flsFunctions.isWebp();


// all prices
if (document.querySelector('.all-prices') !== null) {
  $('.all-prices__opener').click(function (){
    $(this).toggleClass('active');
    $(this).next('.all-prices__dropdown').slideToggle();
  });
}




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


//	Open & close mobile menu.
document.querySelector('a[href="#mobile-menu"]').addEventListener( 'click', function(evt) {
  evt.preventDefault();

  if (document.querySelector('body').classList.contains('mm-ocd-opened')) {
    drawer.close();
  } else {
    drawer.open();
  }
})




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


// Swiper
// reviews more
if ('.reviews .swiper') {

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 500,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  let reviewTexts = document.querySelectorAll('.reviews__text');
  let reviewBtns = document.querySelectorAll('.reviews__more');
  let reviewBtnTexts = document.querySelectorAll('.reviews__more .text-icon');

  for (let i = 0; i < reviewTexts.length; i++) {

    reviewTexts[i].setAttribute('data-height', reviewTexts[i].offsetHeight);

    if (window.innerWidth < 992) {
      setTimeout(function() {
        reviewTexts[i].style.maxHeight = '60px';
      }, 100);
    } else if (window.innerWidth > 991) {
      setTimeout(function() {
        reviewTexts[i].style.maxHeight = '60px';
      }, 100);
    }

    swiper.on('slideChange', function () {
      if (window.innerWidth < 992) {
        reviewTexts[i].style.maxHeight = '60px';
      } else if (window.innerWidth > 991) {
        reviewTexts[i].style.maxHeight = '60px';
      }
    });

    reviewBtnClick(reviewTexts[i], reviewBtns[i], reviewBtnTexts[i]);
    reviewTexts[i].setAttribute('data-text-lenght', reviewTexts[i].innerText.length);
    let symbolsCount = 0;

    if (window.innerWidth > 1279) {
      if (reviewTexts[i].innerText.length > 180) {
        symbolsCount = 180;
        textSympols(symbolsCount)
      }
    } else if (window.innerWidth > 991) {
      if (reviewTexts[i].innerText.length > 165) {
        symbolsCount = 165;
        textSympols(symbolsCount)
      }
    } else if (window.innerWidth > 767) {
      if (reviewTexts[i].innerText.length > 150) {
        symbolsCount = 150;
        textSympols(symbolsCount)
      }
    } else if (window.innerWidth > 575) {
      if (reviewTexts[i].innerText.length > 162) {
        symbolsCount = 162;
        textSympols(symbolsCount)
      }
    } else if (window.innerWidth > 319) {
      if (reviewTexts[i].innerText.length > 178) {
        symbolsCount = 187;
        textSympols(symbolsCount)
      }
    }

    function textSympols(symbolsCount1) {
      if (reviewTexts[i].innerText.length > symbolsCount1) {
        reviewTexts[i].classList.add('long-text');
      }
    }
  }

  function reviewBtnClick(reviewText, reviewBtn, reviewBtnText) {
    reviewBtn.addEventListener('click', function(evt) {
      let getHeight = reviewText.getAttribute('data-height');
      evt.preventDefault();
      reviewBtn.classList.toggle('active');

      if (window.innerWidth > 991) {
        if (reviewText.offsetHeight === 60) {
          reviewText.style.maxHeight = getHeight + 'px';
          reviewBtnText.innerHTML = 'Свернуть'
        } else {
          reviewText.style.maxHeight = '60px';
          reviewBtnText.innerHTML = 'Читать дальше'
        }
      } else if (window.innerWidth < 992) {
        if (reviewText.offsetHeight === 60) {
          reviewText.style.maxHeight = getHeight + 'px';
          reviewBtnText.innerHTML = 'Свернуть'
        } else {
          reviewText.style.maxHeight = '60px';
          reviewBtnText.innerHTML = 'Читать дальше'
        }
      }
    })
  }
}




