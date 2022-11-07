import $ from 'jquery';

function openMenu() {
  $('body').addClass('no-scroll opacity-layer');
  $('.mobile-menu').fadeIn();
}

function closeMenu() {
  $('body').removeClass('no-scroll opacity-layer');
  $('.mobile-menu').fadeOut();
}

export { openMenu, closeMenu };
