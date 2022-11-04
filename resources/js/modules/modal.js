import $ from 'jquery';
import { closeMenu } from './utils';

const modal = () => {
  $('[data-trigger]').on('click', function () {
    closeMenu();

    let triggerVal = $(this).attr('data-trigger');

    $('body').addClass('no-scroll');
    $(`.modal-container[data-modal="${triggerVal}"]`).fadeIn();
  });

  $('.modal-container .close').on('click', function () {
    $('.modal-container').fadeOut();
    $('body').removeClass('no-scroll');
  });

  if ($('.modal .select').length) {
    $('.modal .select').each(function () {
      let elem = $(this);
      $(this).select2({
        placeholder: 'Any',
        dropdownParent: elem.parent(),
        minimumResultsForSearch: Infinity,
        width: 'style',
      });
    });
  }

  //показ имени файла
  $('.form__file .add').on('click', function () {
    $(this).parent().find('input').trigger('click');
  });

  $('.form__file input').on('change', function () {
    let filename = this.files[0].name;

    $(this).parent().find('.filename').text(filename);
    $(this).parent().find('.remove').fadeIn();
  });

  //удаление файла
  $('.form__file .remove').on('click', function () {
    $(this).parent().find('.filename').text('');
    $(this).parent().find('.input').val('');
    $(this).fadeOut();
  });
};

export default modal;
