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

// filter effects-icon click

var effects = document.querySelectorAll('.post__photo-effect');
var effectIcons = document.querySelectorAll('.post__photo-effect-icon');

for (var i = 0; i < effectIcons.length; i++) {
  iconClick(effectIcons[i], effects[i]);
};

function iconClick(icon, effect) {
  icon.addEventListener('click', function() {

    for (var i = 0; i < effectIcons.length; i++) {
     effects[i].classList.remove('post__photo-effect--active');
    };

    if (effect.classList.contains('post__photo-effect--active')) {
      effect.classList.remove('post__photo-effect--active');
    } else {
      effect.classList.add('post__photo-effect--active');
    }
    console.log('click icon');
  })
}

//  like counter

var hearts = document.querySelectorAll('.gallery__like-icon'); 
var likeCounters = document.querySelectorAll('.gallery__like-counter');
var heartFills = document.querySelectorAll('.heart-fill');

for (var i = 0; i < hearts.length; i++) {
  likeCounts(hearts[i], likeCounters[i], heartFills[i]);
};

function likeCounts(heart, likeCounter, heartFill) {
  var defaultValue = parseInt(likeCounter.textContent);
  heart.addEventListener('click', function() {
    
     if (likeCounter.textContent > defaultValue) {
        var minus = defaultValue;
        likeCounter.textContent = ' ' + minus;
        heartFill.style.fill = 'rgba(255, 255, 255, 0.0)';
     } else {
        var plus = defaultValue + 1;
        heartFill.style.fill = '#d22856';
        likeCounter.textContent = ' ' + plus;
     }
   })
}

// photo effects changes

var image = document.querySelector('.post__image');
var imageFill = document.querySelector('.post__image--fill');

var crop = document.querySelector('.post__range--crop');
var fill = document.querySelector('.post__range--fill');
var contrast = document.querySelector('.post__range--contrast');

var resetButton = document.querySelector('.post__button--reset');

var cropValue;
var grayscaleValue;
var contrastValue;
var filters;

function cropFunction() {
  cropValue = crop.value + '%';
  imageFill.style.width = cropValue;
  return cropValue;
}

function grayFunction() {
  grayscaleValue = 'grayscale(' + fill.value + '%)';
  imageFill.style.filter = grayscaleValue;
  return grayscaleValue;
}

function contrastFunction() {
  contrastValue = 'contrast(' + contrast.value + '%)';
  imageFill.style.filter = contrastValue;
  return contrastValue;
}

function bothFunction() {
  imageFill.style.filter = grayscaleValue + ' ' + contrastValue;
}

crop.addEventListener('input', function() {
  cropFunction();
})

fill.addEventListener('input', function() {
  grayFunction();
  bothFunction();
})

contrast.addEventListener('input', function() {
  contrastFunction();
  bothFunction();
})

resetButton.addEventListener('click', function() {
  cropValue = '100%';
  grayscaleValue = 'grayscale(0%)';
  contrastValue = 'contrast(100%)';
  imageFill.style.width = cropValue;
  bothFunction()
})

//console.log(grayscaleValue + ' ' + contrastValue);

// contrast.addEventListener('input', function() {
//   console.log('fill click');
//   imageFill.style.filter = 'contrast(' + contrast.value + '%)';
// })




// var rangeValue = function(){
//   var newValue = fill.value;

//   var target = document.querySelector('.value');
//   target.innerHTML = newValue;

// }

// fill.addEventListener("input", rangeValue);












  