import page from './node_modules/page/page.mjs';
import { homeView } from './templates/home.js';
import { articlesView } from './templates/articles.js';
import { articlesDetailsView } from './templates/articleDeatilsView.js';

page('/home', homeView);
page('/articles', articlesView);
page('/articles/:articleId', articlesDetailsView);


page.start();