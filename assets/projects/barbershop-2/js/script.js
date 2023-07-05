document.createElement('main');

//----------------Main-nav------------

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    document.querySelector("body").style.position = 'fixed';
    console.log('open')
  } else {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
    document.querySelector("body").style.position = 'static';
    console.log('closed')

  }
});


//----------------Modal-login------------

var modalLogin = document.querySelector(".modal-login");
var modalClose = document.querySelector(".modal-login__modal-close");
var userLogin = document.querySelector(".user-list__login");
var overlay = document.querySelector(".overlay");

userLogin.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalLogin.classList.toggle("modal-shown");
  overlay.classList.add("overlay-shown");
});

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalLogin.classList.remove("modal-shown");
  overlay.classList.remove("overlay-shown");
});


//----------------Advantages------------

if (document.querySelector('.advantages')) {

// Получаем элементы слайдера
  const sliderWrapper = document.querySelector('.advantages__wrapper');
  const advantageItem = document.querySelectorAll('.advantages__item');
  const advantageToggleButtons = document.querySelectorAll('.advantages__toggles .slider__toggle');

// Устанавливаем индекс активного слайда
  let advantageActiveIndex = 0;

// Функция для отображения активного слайда
  const showActiveSlide = () => {
    // Скрываем все слайды
    advantageItem.forEach(item => {
      item.classList.remove('slider__item--active');
    });

    // Отображаем активный слайд
    advantageItem[advantageActiveIndex].classList.add('slider__item--active');

    // Подсвечиваем активный буллет
    advantageToggleButtons.forEach(button => {
      button.classList.remove('slider__toggle--active');
    });
    advantageToggleButtons[advantageActiveIndex].classList.add('slider__toggle--active');
  };

// Функция для переключения слайдов
  const changeSlide = (index) => {
    advantageActiveIndex = index;
    showActiveSlide();
  };

// Обработчик для клика на буллеты
  advantageToggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      changeSlide(index);
    });
  });

// Обработчик для свайпа на мобильных устройствах
  let touchStartX = 0;
  let touchEndX = 0;

  sliderWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  sliderWrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    // Чтобы считать свайп, пользователь должен сдвинуть палец на 100px
    if (Math.abs(deltaX) > 100) {
      if (deltaX > 0) {
        // Свайп вправо - переключение на предыдущий слайд
        advantageActiveIndex = (advantageActiveIndex - 1 + advantageItem.length) % advantageItem.length;
      } else {
        // Свайп влево - переключение на следующий слайд
        advantageActiveIndex = (advantageActiveIndex + 1) % advantageItem.length;
      }
      showActiveSlide();
    }
  });

}





//----------------News------------

if (document.querySelector('.news')) {
  var newsToAll = document.querySelector(".news__to-all");
  var newsItemThird = document.querySelector(".news__item--third");
  var newsItemFourth = document.querySelector(".news__item--fourth");

  newsToAll.addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log('test');
    if (newsItemThird.classList.contains("news__item--shown")) {
      newsItemThird.classList.remove("news__item--shown");
      newsItemFourth.classList.remove("news__item--shown");
    } else {
      newsItemThird.classList.add("news__item--shown");
      newsItemFourth.classList.add("news__item--shown");
    }
  });
}


//----------Reviews---------

if (document.querySelector('.reviews')) {
  // Получаем все блоки отзывов
  const sliderItems = document.querySelectorAll('.reviews__item');

// Получаем кнопки предыдущего и следующего отзыва
  const prevButton = document.querySelector('.reviews__prev');
  const nextButton = document.querySelector('.reviews__next');

// Получаем все буллеты
  const reviewsToggleButtons = document.querySelectorAll('.reviews__toggles .slider__toggle');

// Устанавливаем индекс активного отзыва
  let activeIndex = 0;

// Функция для отображения активного отзыва
  const showActiveItem = () => {
    // Скрываем все отзывы
    sliderItems.forEach(item => {
      item.classList.remove('slider__item--active');
    });

    // Отображаем активный отзыв
    sliderItems[activeIndex].classList.add('slider__item--active');

    // Подсвечиваем активный буллет
    reviewsToggleButtons.forEach(button => {
      button.classList.remove('slider__toggle--active');
    });
    reviewsToggleButtons[activeIndex].classList.add('slider__toggle--active');
  };

// Обработчик для кнопки предыдущего отзыва
  prevButton.addEventListener('click', () => {
    // Уменьшаем индекс активного отзыва
    activeIndex--;

    // Если индекс становится меньше нуля, переходим к последнему отзыву
    if (activeIndex < 0) {
      activeIndex = sliderItems.length - 1;
    }

    // Отображаем активный отзыв
    showActiveItem();
  });

// Обработчик для кнопки следующего отзыва
  nextButton.addEventListener('click', () => {
    // Увеличиваем индекс активного отзыва
    activeIndex++;

    // Если индекс достигает конца, переходим к первому отзыву
    if (activeIndex >= sliderItems.length) {
      activeIndex = 0;
    }

    // Отображаем активный отзыв
    showActiveItem();
  });

// Обработчик для буллетов
  reviewsToggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Устанавливаем индекс активного отзыва на основе индекса буллета
      activeIndex = index;

      // Отображаем активный отзыв
      showActiveItem();
    });
  });

// Отображаем первоначальный активный отзыв
  showActiveItem();

// Получаем контейнер слайдера
  const sliderContainer = document.querySelector('.reviews__list');

// Устанавливаем начальные значения для свайпа
  let reviewsTouchStartX = 0;
  let reviewsTouchEndX = 0;

// Функция для обработки события свайпа
  const handleSwipe = () => {
    // Вычисляем разницу между начальной и конечной позициями свайпа
    const swipeDiff = reviewsTouchEndX - reviewsTouchStartX;

    // Если разница больше 100, выполняем свайп влево
    if (swipeDiff > 100) {
      activeIndex--;

      // Если индекс становится меньше нуля, переходим к последнему отзыву
      if (activeIndex < 0) {
        activeIndex = sliderItems.length - 1;
      }
    }
    // Если разница меньше -100, выполняем свайп вправо
    else if (swipeDiff < -100) {
      activeIndex++;

      // Если индекс достигает конца, переходим к первому отзыву
      if (activeIndex >= sliderItems.length) {
        activeIndex = 0;
      }
    }

    // Отображаем активный отзыв
    showActiveItem();
  };

// Обработчик для события touchstart
  sliderContainer.addEventListener('touchstart', event => {
    reviewsTouchStartX = event.touches[0].clientX;
  });

// Обработчик для события touchmove
  sliderContainer.addEventListener('touchmove', event => {
    reviewsTouchEndX = event.touches[0].clientX;
  });

// Обработчик для события touchend
  sliderContainer.addEventListener('touchend', handleSwipe);
}

