// ----------------SLIDER--------------

var slider1Radio = document.querySelector(".slider1-radio");
var slider2Radio = document.querySelector(".slider2-radio");
var slider3Radio = document.querySelector(".slider3-radio");
var body = document.querySelector("body"); 

slider1Radio.addEventListener("click", function() {
  body.classList.remove("body-color2");
  body.classList.remove("body-color3");
  body.classList.add("body-color1");
});

slider2Radio.addEventListener("click", function() {
  console.log("text shown");
  body.classList.remove("body-color1");
  body.classList.remove("body-color3");
  body.classList.add("body-color2");
});

slider3Radio.addEventListener("click", function() {
  console.log("text shown");
  body.classList.remove("body-color1");
  body.classList.remove("body-color2");
  body.classList.add("body-color3");
});

// ----------------MODAL----------------

var itemSearch = document.querySelector(".item-search");
var search = document.querySelector(".search");
var loginLink = document.querySelector(".login-link");
var buttonFeedback = document.querySelector(".button-feedback");
var modalLogin = document.querySelector(".modal-login");
var modalFeedback = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");

loginLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  overlay.classList.add("display-block");
  modalLogin.classList.add("display-block");
});

buttonFeedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  overlay.classList.add("display-block");
  modalFeedback.classList.add("display-block");
});

itemSearch.addEventListener("click", function(evt) {
  overlay.classList.add("display-block");
  search.classList.add("display-block");
});

overlay.addEventListener("click", function() {
  overlay.classList.remove("display-block");
  search.classList.remove("display-block");
  modalLogin.classList.remove("display-block");
  modalFeedback.classList.remove("display-block");
});
