//import '../jquery-3.4.1.min.js'
import $ from 'jquery';



function ready() {
  //$('.phoneMask').mask('7 (999) 999-99-99');


  $(document).ready(function() {
    $(document)
      .on('click', '.phoneMask', function () {
        $('.phoneMask').mask('X (999) 999-99-99', {
          translation: {
            'X': {
              pattern: /[7-8]/
            }
          }
        });
      })
  });

}

document.addEventListener("DOMContentLoaded", ready);


$('.tag').click(function() {
  return console.log('clicked');
});