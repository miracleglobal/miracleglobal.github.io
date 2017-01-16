$(function(){
  $("#gotoTop").on('click',function(){
    window.scrollTo(0,0);
  })
  $('.logo').on('click',function(){
    location.href='../index.html';
  })

  $('.weibo').on('click',function(){
    window.open("http://weibo.com/miracleuk");
  })
  $('.wechat').on('click',function(){
    var clientHeight = document.body.clientHeight ;
    $('.mask').css('height',clientHeight).show();
  })
  $('.mask').on('click',function(){
    $(this).hide();
  })
var contentHeight = $('.content').height();
var rectHeight = $('html').css('font-size').replace('px','')*3;
$('.animate-letters').append(
  '<div class="animate-letter"></div><div class="animate-letter"></div>'
)
for(var i=0;i<Math.ceil(contentHeight/rectHeight);i++){
  $('.animate-letters').append(
    '<div class="animate-letter"></div>'
  )

}

})
