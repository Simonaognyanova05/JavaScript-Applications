import page from '../node_modules/page/page.mjs';
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { loginView } from './views/loginView.js';

page(renderMiddleware);
page('/login', loginView)
page.start();