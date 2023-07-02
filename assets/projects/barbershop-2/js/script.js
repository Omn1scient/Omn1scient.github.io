//----------------Main-nav------------

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
  }
});

//----------------Modal-login------------

var modalLogin = document.querySelector(".modal-login");
var modalClose = document.querySelector(".modal-login__modal-close");
var userLogin = document.querySelector(".user-list__login");
var overlay = document.querySelector(".overlay");

userLogin.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log('test');
  modalLogin.classList.toggle("modal-shown");
  overlay.classList.add("overlay-shown");
});

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log('test');
  modalLogin.classList.remove("modal-shown");
  overlay.classList.remove("overlay-shown");
});

//----------------Advantages------------

var advantagesItems = document.querySelectorAll('.advantages__list .advantages__item');
var advantagesToggles = document.querySelectorAll('.advantages__toggles .slider__toggle');

var addAdvantageHandler = function (advantagesToggle, advantagesItem) {
  advantagesToggle.addEventListener('click', function () {

    for (var i = 0; i < advantagesToggles.length; i++) {
      advantagesToggles[i].classList.remove('slider__toggle--active');
      advantagesItems[i].classList.remove('slider__item--active');
    }

    advantagesToggle.classList.add('slider__toggle--active');
    advantagesItem.classList.add('slider__item--active');
  });
};

for (var i = 0; i < advantagesToggles.length; i++) {
  addAdvantageHandler(advantagesToggles[i], advantagesItems[i]);
}

//----------------News------------

var newsToAllButton = document.querySelector(".news__to-all");
var newsItems = document.querySelectorAll(".news .news__item");

newsToAllButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  for (var i = 2; i < newsItems.length; i++) {
    newsItems[i].classList.toggle('news__item--shown');
  }
});

//----------Reviews---------

var reviews = document.querySelector('.reviews');

var reviewsToggles = reviews.querySelectorAll('.slider__toggle');
var reviewsItems = reviews.querySelectorAll('.reviews__item');

var addReviewHandler = function (reviewsToggle, reviewsItem) {
  reviewsToggle.addEventListener('click', function () {

    for (var i = 0; i < reviewsToggles.length; i++) {
      reviewsToggles[i].classList.remove('slider__toggle--active');
      reviewsItems[i].classList.remove('slider__item--active');
    }

    reviewsToggle.classList.add('slider__toggle--active');
    reviewsItem.classList.add('slider__item--active');
  });
};

for (var i = 0; i < reviewsToggles.length; i++) {
  addReviewHandler(reviewsToggles[i], reviewsItems[i]);
}

//----------------Slider------------

var buttonPreview = reviews.querySelector('.reviews__prev');

var buttonNext = reviews.querySelector('.reviews__next');
var reviewsItems = reviews.querySelectorAll('.reviews__item');

var num = 0;

buttonPreview.addEventListener('click', function(evt) {
  evt.preventDefault();
  num--;

  if(num < 0) {
    num = reviewsItems.length - 1;
  }

  for (var i = 0; i < reviewsItems.length; i++) {
    reviewsItems[i].classList.remove('slider__item--active');
    reviewsToggles[i].classList.remove('slider__toggle--active');
  }

  reviewsItems[num].classList.add('slider__item--active');
  reviewsToggles[num].classList.add('slider__toggle--active');
});


buttonNext.addEventListener('click', function(evt) {
  evt.preventDefault();
  num++;

  if (num >= reviewsItems.length) {
    num = 0;
  }
  
  for (var i = 0; i < reviewsItems.length; i++) {
    reviewsItems[i].classList.remove('slider__item--active');
    reviewsToggles[i].classList.remove('slider__toggle--active');
  }

  reviewsItems[num].classList.add('slider__item--active');
  reviewsToggles[num].classList.add('slider__toggle--active');
});