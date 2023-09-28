import page from '../node_modules/page/page.mjs';
import { renderMiddleWare } from './middleWares/renderMiddleWare.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';

page(renderMiddleWare);
page('/', homeView);
page('/login', loginView);

page.start();