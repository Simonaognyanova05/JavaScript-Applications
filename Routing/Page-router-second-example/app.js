import page from './node_modules/page/page.mjs';
import { homeView } from './templates/home.js';
import { articlesView } from './templates/articles.js';

page('/home', homeView);
page('/articles', articlesView);

page.start();