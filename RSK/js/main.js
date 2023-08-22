// image slide

$('.imgSlide >a:gt(0)').hide();
setInterval(function(){
  $('.imgSlide >a:first-child').fadeOut()
  .next('a').fadeIn()
  .end().appendTo('.imgSlide');
}, 3000);
