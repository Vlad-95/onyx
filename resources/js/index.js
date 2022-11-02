import $ from 'jquery';
import 'slick-carousel';
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox.js';

import intro from './modules/intro';
import menu from './modules/menu';
import gallery from './modules/news-slider';

$(document).ready(function () {
  intro();
  menu();
  gallery();
});
