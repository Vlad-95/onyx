import $ from 'jquery';

const filter = () => {
  if ($('.filter').length) {
    $('.filter .select').each(function () {
      let elem = $(this);
      $(this).select2({
        placeholder: 'Any',
        dropdownParent: elem.parent(),
        minimumResultsForSearch: Infinity,
        width: 'style',
      });
    });

    $('.js-only-number').on('input', function () {
      this.value = this.value.replace(/[^0-9]/g, '');
    });

    //показ числа выбранных элементов
    function countItems() {
      let count = 0;

      $('.filter__item').each(function () {
        if ($(this).find('.input').val()) {
          count++;
        }

        if ($(this).find('.select').val()) {
          count++;
        }
      });

      if (count) {
        $('.filter .text span').text(count);
        $('.filter .text').fadeIn();
        $('.filter .btn').fadeIn();
      } else {
        $('.filter .text').fadeOut();
        $('.filter .btn').fadeOut();
      }
    }

    $('.filter .select').on('select2:select', countItems);
    $('.filter .input').on('input', countItems);

    //сброс фильтра
    $('.filter .btn').on('click', function () {
      $('.filter__item').each(function () {
        if ($(this).find('.input')) {
          $(this).find('.input').val('');
        }

        if ($(this).find('.select')) {
          $(this).find('.select').val(null).trigger('change');
        }
      });

      countItems();
    });
  }
};

export default filter;
