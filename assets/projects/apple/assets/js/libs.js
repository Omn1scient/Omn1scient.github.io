import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import { Modal } from 'bootstrap';


/*modules folder*/
//import './modules/jQuery.js'



import $ from 'jquery';

/*node_modules*/
import 'jquery-mask-plugin'


// smooth page appearing
function ready() {
  //document.querySelector('body').style.opacity = 0;

  setTimeout(pageLoadOpacity, 100);
  setTimeout(pageLoadOpacityRemove, 500);

  function pageLoadOpacity() {
    document.querySelector('body').style.opacity = 1;
    document.querySelector('body').style.transition = 'all 0.3s ease';
  }

  function pageLoadOpacityRemove() {
    document.querySelector('body').style.opacity = 1;
    document.querySelector('body').style.transition = 'none';
  }


  $(document).on('click', '.phoneMask', function () {
    $('.phoneMask').mask('X (999) 999-99-99', {
      translation: {
        'X': {
          pattern: /[7-8]/
        }
      }
    });
  })

}

document.addEventListener("DOMContentLoaded", ready);






//import Swiper, { Navigation, Pagination } from 'swiper';

//import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';

//const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  //modules: [Navigation, Pagination],


//});


//import { Fancybox } from "@fancyapps/ui";

/*
Fancybox.bind("[data-fancybox]", {
  // Your options go here
});
*/

// all prices
if (document.querySelector('.all-prices') !== null) {
  $('.all-prices__opener').click(function (){
    $(this).toggleClass('active');
    $(this).next('.all-prices__dropdown').slideToggle();
  });
}

// review fake modal
let modalReview = new bootstrap.Modal(document.getElementById('modalReview'))
let modalReviewSuccess = new bootstrap.Modal(document.getElementById('modalSuccessReview'))

var modalReviewBtnSubmit = document.querySelector('#modalReview .request-form__element button');
let reviewersName = document.querySelector('#modalReview input');
let reviewersMessage = document.querySelector('#modalReview textarea');


function valueReset() {
  modalReviewSuccess.show();
  reviewersName.value = '';
  reviewersMessage.value = '';
}

modalReviewBtnSubmit.addEventListener('click', function(evt) {
  if (reviewersMessage.value !== '') {
    evt.preventDefault();
    modalReview.hide();
    setTimeout(valueReset, 800);
  }
})


