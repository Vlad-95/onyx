import $ from 'jquery';
import { closeMenu, openMenu } from './utils';

const menu = () => {
  $('.burger').on('click', openMenu);
  $('.mobile-menu__close').on('click', closeMenu);

  //аккордион в мобильном меню
  $('.menu.mobile .toggle').on('click', function () {
    $(this).toggleClass('active');

    $(this).next().slideToggle();
  });
};

export default menu;
