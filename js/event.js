$(function () {
  // header sub menu 숨기기
  $('.sub').hide();
  $('.sub2').hide();

  // 1차 서브메뉴 보이기
  $('.gnb li').hover(function () {
    $(this).find('.sub').show();
  }, function () {
    $(this).find('.sub').hide();
  });

  // 2차 서브메뉴 보이기
  $('.sub li').hover(function () {
    $(this).find('ul').show();
  }, function () {
    $(this).find('ul').hide();
  });


  // 반응형일때 메뉴 가리기
  let ww = $(window).width();
  if (ww < 600) {
    $('.gnb').hide();
  } else {
    $('.gnb').show();
  }
});