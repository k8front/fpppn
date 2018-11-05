var Webflow = Webflow || [];
Webflow.push(function() {
// проверка в диве (this) активный личекбокс, если да, то добавляет к кнопке доп. класс.
// при доп. классе кликает с него на кнопку слайдера "далее"
let checkboxes = $(".check-btn-field").children(".check-btn"); 
function check(checkboxes) { 
for(let i = 0; i < checkboxes.length; i++) { 
if (checkboxes[i].checked) { 
$(checkboxes[i]).parent().parent().find(".slide-btn").addClass("btn--next"); 
var r = $('.w-slider-arrow-right');
  $('.btn--next').on('click', function () {
     r.trigger('tap');
     $('.img-2, .img-3, .img-4, .img-5, .img-6, .img-7').css('opacity', '0');
     $('.img-1').css('opacity', '100');
});
break; 
} else { 
$(checkboxes[i]).parent().parent().find(".btn--next").unbind("click"); 
$(checkboxes[i]).parent().parent().find(".slide-btn").removeClass("btn--next"); 
} 
} 
} 
for(let i = 0; i < checkboxes.length; i++) { 
checkboxes[i].addEventListener("click", function () { 
let currentCheckBoxes = $(this).parent().parent().find(".check-btn");
check(currentCheckBoxes); 
}); 
}
var r = $('.w-slider-arrow-right');
  $('.home--next').on('click', function () {
     r.trigger('tap');
});

// масска для телефона
$(document).ready(function(){
  $(".phone-mask").inputmask("+7 (999) 999 99 99",{ "placeholder": "0" });
}); 

// присваивание класса инпуту при ошибке ввода
$('document').ready(function() {
  $('form .btn-submit').on('click', function() {
    $('input[required]').addClass('req');
  });
});

// цели метрики
$('#btn-home').on('click', function(e) {
  yaCounter50997755.reachGoal('btn-home');
  return true;
});
$('#btn-1').on('click', function(e) {
  yaCounter50997755.reachGoal('btn-1');
  return true;
});
$('#btn-2').on('click', function(e) {
  yaCounter50997755.reachGoal('btn-2');
  return true;
});
$('#btn-3').on('click', function(e) {
  yaCounter50997755.reachGoal('btn-3');
  return true;
});
$('#btn-4').on('click', function(e) {
  yaCounter50997755.reachGoal('btn-4');
  return true;
});
$('#btn-5').on('click', function(e) {
  yaCounter50997755.reachGoal('btn-5');
  return true;
});
$('#btn-6').on('click', function(e) {
  yaCounter50997755.reachGoal('btn-6');
  return true;
});
$(window).load(function() {
  yaCounter50997755.reachGoal('/thanks')
});

});

