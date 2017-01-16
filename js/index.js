$(function(){
  //Swiper初始化
  var mySwiper = new Swiper ('.top .swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoplay : 5000,
  autoplayDisableOnInteraction : false,
  // 如果需要分页器
  pagination: '.swiper-pagination',

  // 如果需要前进后退按钮
  // nextButton: '.swiper-button-next',
  // prevButton: '.swiper-button-prev',
  })
  var mySwiper2 = new Swiper('.discover .swiper-container2', {
      // pagination: '.swiper-pagination',
      //  nextButton: '.swiper-button-next',
      slidesPerView: 4.5,
      centeredSlides: false,
      paginationClickable: true,
      loop:true,
       spaceBetween: 20,
      grabCursor: true
  });
  $('.discover-arrow').click(function(){
    mySwiper2.slideNext();
  })
  $('.imghover').on('mouseover',function(){
    $(this).children('div,img').addClass('img-hover');
  })
  $('.imghover').on('mouseout',function(){
    $(this).children('div,img').removeClass('img-hover');
  })
  $("#gotoTop").on('click',function(){
    window.scrollTo(0,0);
  })
  $('.logo').on('click',function(){
    location.href='./index.html';
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
  // $('.pure-input-1-2').on('change',function(){
  //     switch ($(this).val()) {
  //       case 'Education':
  //         location.href='./dropdown/universities.html';
  //         break;
  //       case 'Property':
  //         location.href='./dropdown/Apartment.html';
  //         break;
  //       case 'Team':
  //         location.href='./dropdown/Team.html';
  //         break;
  //         case 'HND&Colleges':
  //           location.href='./dropdown/hn&College.html';
  //           break;
  //         case 'Alumni Association':
  //           location.href='./dropdown/alumniassociation.html';
  //           break;
  //         case'Accommodation':
  //           location.href='./dropdown/accommodation.html';
  //           break;
  //       default:
  //           return false;
  //     }
  // })
  //
  $('.news .imghover:nth-child(1)').on('click',function(){
    location.href="./news/right.html";
  })
  $('.news .imghover:nth-child(2)').on('click',function(){
    location.href="./news/eb5.html";
  })

  $('.news .imghover:nth-child(3)').on('click',function(){
    location.href="./news/theFirstStep.html";
  })
  $('.news .imghover:nth-child(4)').on('click',function(){
    location.href="./news/wantHave.html";
  })


  $('.discover .boots').on('click',function(){
    location.href="./discover/bootsto.html";
  })
  $('.discover .uk').on('click',function(){
    location.href="./discover/ukConsiders.html";
  })
  $('.discover .scotrail').on('click',function(){
    location.href="./discover/scotrail.html";
  })
  $('.discover .numberof').on('click',function(){
    location.href="./discover/numberOfForeign.html";
  })


  $('.discover .brexit').on('click',function(){
    location.href="./discover/Brexitcould.html";
  })
  $('.discover .morethan').on('click',function(){
    location.href="./discover/morethan.html";
  })
  $('.discover .schoolholiday').on('click',function(){
    location.href="./discover/Schoolholidays.html";
  })


     $('.study .imghover:nth-child(1)').on('click',function(){
        location.href="./dropdown/universities.html";
  })
  $('.study .imghover:nth-child(2)').on('click',function(){
        location.href="./dropdown/hndCollege.html";
  })
  $('.study .imghover:nth-child(3)').on('click',function(){
        location.href="./dropdown/alumniAssociation.html";
  })
  $('.study .imghover:nth-child(4)').on('click',function(){
        location.href="./dropdown/accommodation.html";
  })
})
