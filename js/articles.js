$(function(){
  $("#gotoTop").on('click',function(){
    window.scrollTo(0,0);
  })
  $('.logo').on('click',function(){
    location.href='../index.html';
  })
  var clientHeight = document.body.clientHeight ;
  $('.weibo').on('click',function(){
    window.open("http://weibo.com/miracleuk");
  })
  $('.wechat').on('click',function(){
    $('.mask').css('height',clientHeight).show();
  })
  $('.mask').on('click',function(){
    $(this).hide();
  })
  // $('.pure-input-1-2').on('change',function(){
  //     switch ($(this).val()) {
  //       case 'Education':
  //         location.href='../dropdown/universities.html';
  //         break;
  //       case 'Property':
  //         location.href='../dropdown/Apartment.html';
  //         break;
  //       case 'Team':
  //         location.href='../dropdown/Team.html';
  //         break;
  //         case 'HND&Colleges':
  //           location.href='../dropdown/hn&College.html';
  //           break;
  //         case 'Alumni Association':
  //           location.href='../dropdown/alumniassociation.html';
  //           break;
  //         case'Accommodation':
  //           location.href='../dropdown/accommodation.html';
  //           break;
  //       default:
  //           return false;
  //
  //     }
  // })
})
