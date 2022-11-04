import $ from 'jquery';
import 'slick-carousel';
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox.js';
import 'jquery-match-height';
import 'select2';
import 'jquery-mask-plugin';

import intro from './modules/intro';
import menu from './modules/menu';
import gallery from './modules/news-slider';
import map from './modules/map';
import tables from './modules/tables';
import catalog from './modules/catalog';
import filter from './modules/filter';
import modal from './modules/modal';

//Вызов карты будет работать только вне всех конструкций
map();

$(document).ready(function () {
  intro();
  menu();
  gallery();
  tables();
  catalog();
  filter();
  modal();
});
