//gnb 서브 메뉴 슬라이드
$('.btn_sub').click(function(){
  $(this).find('span').toggleClass('on'); //toggle = add + remove
  $(this).siblings('.list_sub_wrap').slideToggle(300); //sblings : 형제관계
});

//gnb가 왼쪽에서 튀어나옴
$('.gnb_btn').click(function(){
  $('#gnb').animate({left : 0},300);
  $('.dark').css({'display':'block'});
});

//gnb 사라짐
$('.dark').click(function(){
  $(this).css({'display':'none'});
  $('#gnb').animate({left : -304},300,'swing');
  $('.login_popup').hide();
});

//로그인 팝업
$('.login_require').click(function(){
  $('.login_popup').show();
  $('#gnb').css({'display':'none'});
});

//로그인 팝업 사라짐
$('.btn_close').click(function(){
  $('.login_popup').hide();
  $('#gnb').css({'display':'none'});
  $('.dark').css({'display':'none'});
});