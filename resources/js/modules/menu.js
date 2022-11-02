import $ from 'jquery';

const menu = () => {
  function openMenu() {
    $('body').addClass('no-scroll');
    $('.mobile-menu').fadeIn();
  }

  function closeMenu() {
    $('body').removeClass('no-scroll');
    $('.mobile-menu').fadeOut();
  }

  $('.burger').on('click', openMenu);
  $('.mobile-menu__close').on('click', closeMenu);

  //аккордион в мобильном меню
  $('.menu.mobile .toggle').on('click', function () {
    $(this).toggleClass('active');

    $(this).next().slideToggle();
  });
};

export default menu;
