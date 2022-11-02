import $ from 'jquery';

const gallery = () => {
  if ($('.news-detail .slider').length) {
    $('.news-detail .slider').slick({
      slidesToShow: 1,
      nextArrow:
        '<button type="button" class="slick-next"><svg><use xlink:href="img/icons/sprite.svg#arrow"></use></svg></button>',
      prevArrow:
        '<button type="button" class="slick-prev"><svg><use xlink:href="img/icons/sprite.svg#arrow"></use></svg></button>',
    });
  }
};

export default gallery;
