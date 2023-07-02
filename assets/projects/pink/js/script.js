var mainNav = document.querySelector('.page-header__main-nav');
mainNav.classList.remove('main-nav--nojs');

var mainNavToggle = document.querySelector('.main-nav__toggle');
var showcase = document.querySelector(".header-showcase");

mainNavToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--closed')) {
    showcase.classList.add('showcase-transform');
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    showcase.classList.remove('showcase-transform');
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
  };
})

// тест кликов на буллетаx
var reviews = document.querySelector('.reviews');
var bullets = reviews.querySelectorAll('.bullets__button');
var reviewItems = reviews.querySelectorAll('.reviews__list-item');


for (var i = 0; i < bullets.length; i++) {
  click(bullets[i], reviewItems[i]);
}

function click(bullet, reviewItem) {
  bullet.addEventListener('click', function () {
    for (var i = 0; i < bullets.length; i++) {
      bullets[i].classList.remove('bullets__button--active');
      reviewItems[i].classList.remove('reviews__list-item--active');
    }
    
    bullet.classList.add('bullets__button--active');
    reviewItem.classList.add('reviews__list-item--active');
  })
}

///////////////// tablet mobile bullets

var tableWrapper = document.querySelector('.table-wrapper');
var priceTable = document.querySelector('.price__price-table');
var TableBullets = tableWrapper.querySelectorAll('.bullets__button');

for (var i = 0; i < bullets.length; i++) {
  click2(TableBullets[i]);
}

function click2(TableBullet) {
  TableBullet.addEventListener('click', function () {
    for (var i = 0; i < TableBullets.length; i++) {
      TableBullets[i].classList.remove('bullets__button--active');
      priceTable.classList.remove('translateX0');
      priceTable.classList.remove('translateX290');
      priceTable.classList.remove('translateX580');
    }

    TableBullet.classList.add('bullets__button--active');
  }) 
  
    TableBullets[0].addEventListener('click', function () {
      priceTable.classList.add('translateX0');
    })

    TableBullets[1].addEventListener('click', function () {
      priceTable.classList.add('translateX290');
    })

    TableBullets[2].addEventListener('click', function () {
      priceTable.classList.add('translateX580');
    })
}


/// next/prev rewievs buttons

var buttonPreview = reviews.querySelector('.reviews__button--prev');
var buttonNext = reviews.querySelector('.reviews__button--next');
var reviewsItems = reviews.querySelectorAll('.reviews__list-item');

var num = 0;

buttonPreview.addEventListener('click', function(evt) {
  evt.preventDefault();
  num--;

  if(num < 0) {
    num = reviewsItems.length - 1;
  }

  for (var i = 0; i < reviewsItems.length; i++) {
    reviewsItems[i].classList.remove('reviews__list-item--active');
    bullets[i].classList.remove('bullets__button--active');
  }

  reviewsItems[num].classList.add('reviews__list-item--active');
  bullets[num].classList.add('bullets__button--active');
});

//

buttonNext.addEventListener('click', function(evt) {
  evt.preventDefault();
  num++;

  if (num >= reviewsItems.length) {
    num = 0;
  }
  
  for (var i = 0; i < reviewsItems.length; i++) {
    reviewsItems[i].classList.remove('reviews__list-item--active');
    bullets[i].classList.remove('bullets__button--active');
  }

  reviewsItems[num].classList.add('reviews__list-item--active');
  bullets[num].classList.add('bullets__button--active');
});





  