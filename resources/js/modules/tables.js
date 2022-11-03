import $ from 'jquery';

const tables = () => {
  //оборачиваем div-ом все таблицы в визивиге, чтобы сделать скролл

  if ($('.wysiwyg').length) {
    $('.wysiwyg table').each(function () {
      $(this).before('<div class="scroll-table"></div>');

      $(this).prev('.scroll-table').append($(this));
    });
  }
};

export default tables;
