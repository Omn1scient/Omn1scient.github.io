// ---------------------INDEX--------------------------
var buttonWriteUs = document.querySelector(".button-write-us"); 
var modalClose = document.querySelector(".modal-feedback-close");
var popupModal = document.querySelector(".modal-feedback");
var gMap = document.querySelector(".google-map");
var marker = document.querySelector(".map-marker");

buttonWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupModal.classList.remove("modal-close");
  popupModal.classList.add("modal-show");
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupModal.classList.toggle("modal-close");
});

marker.addEventListener("click", function (evt) {
  evt.preventDefault();
  gMap.classList.add("google-map-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (gMap.classList.contains("google-map-show")) {
      evt.preventDefault();
      gMap.classList.remove("google-map-show");
    }
  }
});

// ---------------------SHOP--------------------------

var labelDown = document.querySelector(".label-down");
var labelUp = document.querySelector(".label-up");
var products = document.querySelector(".shop-product-list");

labelDown.addEventListener("click", function f(evt) {
  evt.preventDefault();
  products.classList.add("flex-direction-reverse");
});

labelUp.addEventListener("click", function f(evt) {
  evt.preventDefault();
  products.classList.remove("flex-direction-reverse");
});

