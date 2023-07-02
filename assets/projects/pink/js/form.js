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

//// enable submit button when value is in input

var formPage = document.querySelector('.competition__form');
var required = formPage.querySelectorAll('input:required');
var submitBtn = formPage.querySelector('.submit__button');

for (var i = 0; i < required.length; i++) {
  required[i].addEventListener('change', formValidate);
}

function formValidate() {
  for (var j = 0; j < required.length; j++) {
    var text = required[j].value;

    if (text==="" || text===undefined) {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false
    }
  }
}

formValidate();