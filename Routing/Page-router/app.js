import page from './node_modules/page/page.mjs';
import { homeView } from './templates/home.js';
import { aboutView } from './templates/about.js';

page('/home', homeView);
page('/about', aboutView);

page.start();