import $ from 'jquery';

function openMenu() {
  $('body').addClass('no-scroll');
  $('.mobile-menu').fadeIn();
}

function closeMenu() {
  $('body').removeClass('no-scroll');
  $('.mobile-menu').fadeOut();
}

export { openMenu, closeMenu };
