//================menu-burger======================
$('.icon-menu').click(function (event) {
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   $('body').toggleClass('lock');
})
//====================Scroll==========================
$('a[href^="#"]').on('click', function () {

   let href = $(this).attr('href');

   $('html, body').animate({
      scrollTop: $(href).offset().top
   });
   return false;
});

//============================Swiper==========================

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },
});

//============================toggles courses-page=================
$(function () {
   $('.gallery__toggles button').click(function () {
      let get_id = this.id;
      let get_current = $('.gallery__cards .' + get_id);

      $('.gallery__card').not(get_current).hide(500);
      get_current.show(500);
   });

   $('#showall').click(function () {
      $('.gallery__card').show(400);
   });
});