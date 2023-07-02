// -----------BUTTON-CLICK-FORM-----------

var btnHotelSearch = document.querySelector(".hotel-search-button");
var hotelSearchForn = document.querySelector(".hotel-search-form");

btnHotelSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  hotelSearchForn.classList.toggle("hotel-search-form-show");
});