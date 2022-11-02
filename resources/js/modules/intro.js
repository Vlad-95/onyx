import $ from 'jquery';

const intro = () => {
  if ($('.intro .slider').length) {
    $('.intro .slider').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnFocus: false,
      pauseOnHover: false,
      dots: true,
      nextArrow: $('.intro .navigate .arrow.next'),
      prevArrow: $('.intro .navigate .arrow.prev'),
      dotsClass: '',
      appendDots: $('.intro .navigate .dots'),
      customPaging: function (slider, i) {
        return '<svg class="dots-svg" width="14" height="14" viewport="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle id="bar" r="6" cx="7" cy="7" fill="none" stroke-dasharray="40" stroke-dashoffset="40" stroke="#b0c468" stroke-width="2"></circle></svg><span class="dots-span"></span>';
      },
    });

    //счетчик
    const allSlide =
      $('.navigate .dots li').length < 10
        ? `0${$('.navigate .dots li').length}`
        : $('.navigate .dots li').length;

    //первоначальная загрузка
    $('.intro .navigate .count').text(`01/${allSlide}`);

    $('.intro .slider').on(
      'afterChange',
      function (event, slick, currentSlide) {
        let curr =
          currentSlide + 1 < 10
            ? `0${currentSlide + 1}`
            : `${currentSlide + 1}`;
        $('.intro .navigate .count').text(`${curr}/${allSlide}`);
      }
    );
  }
};

export default intro;
