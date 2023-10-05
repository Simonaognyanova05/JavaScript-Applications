import page from '../node_modules/page/page.mjs';
import { homePageView } from './templates/homePage.js';
import { loginView } from './templates/login.js';
import { navView } from './templates/navbar.js';

navView();
page('/', homePageView);
page('/login', loginView);
page.start();
