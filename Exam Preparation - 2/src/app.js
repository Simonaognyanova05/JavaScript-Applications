import page from '../node_modules/page/page.mjs';
import { renderNavigationMiddleware } from './middlewares/renderMiddlewares.js';
// import { homeView } from './views/homeView.js';
// import { loginView } from './views/loginView.js';

page(renderNavigationMiddleware);

// page('/', homeView);
// page('/login', loginView);
page.start();