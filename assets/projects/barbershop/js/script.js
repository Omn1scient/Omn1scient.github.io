var link = document.querySelector(".login-link");
var mapLink = document.querySelector(".contacts-button-map");
var popup = document.querySelector(".modal-login");
var mapPopup = document.querySelector(".modal-map");
var close = popup.querySelector(".modal-close");
var mapClose = mapPopup.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

// --------------------Проверка работы localStorage---------------------

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false; 
};

// -------------------попап на клик Вход и его закрытие-----------------

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("overlay-show");
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay-show");
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  mapPopup.classList.remove("modal-show");
});


close.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay-show");
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

// --------------------Внести данные логина в storage---------------------

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    } 
  }
});

// --------------------Закрыть попап кнопкой ESC---------------------------

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
      mapPopup.classList.remove("modal-show");
    }
  }
});

// ---------------------------------Карта--------------------------------------

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("overlay-show");
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay-show");
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
      popup.classList.remove("modal-error");
    }
  }
});