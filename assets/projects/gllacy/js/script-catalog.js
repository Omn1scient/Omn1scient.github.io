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

itemSearch.addEventListener("click", function(evt) {
  overlay.classList.add("display-block");
  search.classList.add("display-block");
});

overlay.addEventListener("click", function() {
  overlay.classList.remove("display-block");
  search.classList.remove("display-block");
  modalLogin.classList.remove("display-block");
});

