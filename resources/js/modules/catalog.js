import $ from 'jquery';

const catalog = () => {
  if ($('.catalog').length) {
    // одинаковая высота в карточках
    $('.list__item .info .label').matchHeight();
  }
};

export default catalog;
