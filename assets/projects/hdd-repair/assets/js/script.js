function ready() {
  /*
  document.querySelector('body').style.opacity = 0;


  setTimeout(pageLoadOpacity, 100);
  setTimeout(pageLoadOpacityRemove, 500);

  function pageLoadOpacity() {
    document.querySelector('body').style.opacity = 1;
    document.querySelector('body').style.transition = 'all 0.3s ease';
  }

  function pageLoadOpacityRemove() {
    document.querySelector('body').style.opacity = 1;
    document.querySelector('body').style.transition = 'none';
  }

   */

  $('.phoneMask').mask('7 (999) 999-99-99');
  $('.f-Mask').mask('+7-(999)-999-99-99');
}

document.addEventListener("DOMContentLoaded", ready);


$('ul.main-menu__list .dropdown').mouseover(function() {
  $(this).find('a[data-toggle="dropdown"]').addClass('hover');
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn();
}).mouseout(function() {
  $(this).find('a[data-toggle="dropdown"]').removeClass('hover');
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut();
})



var mobileHamburger = document.querySelector('.header .header-hamburger');
var mobileMenu = document.querySelector('.header__mobile-menu');

mobileHamburger.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (document.querySelector('body').classList.contains('mobile-menu-open')) {
    document.querySelector('body').style.position = "static"
    document.querySelector('body').classList.remove('mobile-menu-open');
  } else {
    document.querySelector('body').classList.toggle('mobile-menu-open');
    document.querySelector('body').style.position = "fixed"
  }
})


if (window.innerWidth < 992) {
  var mobileSubmenuWrapper = document.querySelectorAll('.header .dropdown-menu-item');
  var mobileSubmenu = document.querySelectorAll('.header .dropdown-menu-item__list');

  var dropdown = document.querySelectorAll('.header .dropdown');

  for (var i = 0; i < mobileSubmenuWrapper.length; i++) {
    mobileSubmenuClick(mobileSubmenuWrapper[i], mobileSubmenu[i]);
  }

  function mobileSubmenuClick(mobileSubmenuElement, mobileSubmenu) {
    mobileSubmenuElement.addEventListener('click', function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      mobileSubmenu.classList.toggle('mobile-show');
    })
  }
}

$('.menu-main .dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
});



var header = document.querySelector('.header');
var headerHolder = document.querySelector('.header-holder');

if (window.innerWidth < 768) {
  headerHolder.style.minHeight = header.offsetHeight + 'px';
}


if (document.querySelector('.faq') !=null) {

  var faqItems = document.querySelectorAll('.faq .faq__item');
  var itemTexts = document.querySelectorAll('.faq .item__text');

  for (var f = 0; f < itemTexts.length; f++) {
    var height = itemTexts[f].offsetHeight + 30;
    itemTexts[f].setAttribute('data-height', height);
    itemTexts[f].style.maxHeight = '0px';
    faqCardAccordion(faqItems[f], itemTexts[f]);
  }

  function faqCardAccordion(faqItem, itemText) {
    faqItem.addEventListener('click', function(evt) {
      var getHeight = itemText.getAttribute('data-height');
      evt.preventDefault();
      faqItem.classList.toggle('active');

      if (itemText.offsetHeight == 0) {
        itemText.style.maxHeight = getHeight + 'px';
      } else {
        itemText.style.maxHeight = '0px';
      }
    })
  }
}

$(document).on('click', '*[data-scroll^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: ($($.attr(this, 'data-scroll')).offset().top - 100)
  }, 700);
});

$('.nav-tabs a').click(function(){
  $(this).tab('show');
});

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

if (document.querySelector('.brands') !== null) {
  var brandsSlider = new Swiper('.brands__slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },

      1200: {
        slidesPerView: 4,
      }
    },

    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });
}


$(window).scroll(function() {
  var footerHeight = $('footer').height();
  var scrollTop = $(window).scrollTop();
  var pageHeight = $(document).height();
  var bottomDifference = pageHeight - footerHeight;

  if (scrollTop >= 500 && scrollTop < bottomDifference - 600) {
    $('.to-top').addClass('show');
  } else {
    $('.to-top').removeClass('show');
  }
});

$('.to-top').click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});