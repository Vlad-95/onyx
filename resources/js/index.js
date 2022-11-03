import $ from 'jquery';
import 'slick-carousel';
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox.js';

import intro from './modules/intro';
import menu from './modules/menu';
import gallery from './modules/news-slider';
import map from './modules/map';
import tables from './modules/tables';

//Вызов карты будет работать только вне всех конструкций
map();

$(document).ready(function () {
  intro();
  menu();
  gallery();
  tables();
});
