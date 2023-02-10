$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.menu').addClass('fixed');
      $('.menu').addClass('menuchange');
      $('.menu').removeClass('menufirst');
    } else if($(this).scrollTop() === 0) {
      $('.menu').removeClass('menuchange');
      $('.menu').addClass('menufirst');
    } else {
      $('.menu').removeClass('fixed');
      // $('.menu').removeClass('menuchange');
      // $('.menu').addClass('menufirst');
    }
  });
});