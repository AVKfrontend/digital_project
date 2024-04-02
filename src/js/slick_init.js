import $ from "jquery";
import "slick-carousel";
window.jQuery = window.$ = $; 
$(document).ready(function(){
  $('.intro__slick-titles').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    prevArrow: $('.intro__slick-btn--prev'),
    nextArrow: $('.intro__slick-btn--next'),
    dots: true,
    appendDots:  $('.intro__slick-dot-area'),
    asNavFor: '.intro__slick-pictures'
  });
});
$(".intro__slick-pictures").slick({
	    fade: true,
	    arrows: false,
	    asNavFor: '.intro__slick-titles'
	  });
