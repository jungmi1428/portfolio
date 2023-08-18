// image slide


setInterval(function(){
  let nowImg = $('figure ul li').eq(0);
  let nextImg = $('figure ul li').eq(1);

  nextImg.addClass('active').css({ opacity : 0})
  .animate({ opacity : 1}, 1000 ,function(){
    $('figure ul').append(nowImg);
    nowImg.removeClass('active');
  })

},3000);