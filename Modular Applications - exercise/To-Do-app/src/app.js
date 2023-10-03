import page from '../node_modules/page/page.mjs';

import { navbarTemplate } from './template/navbarTemplate.js';
import { homeView } from './template/homeTemplate.js';
import { loginView } from './template/loginТemplate.js';
import { registerView } from './template/registerTemplate.js';
import { createView } from './template/createTemplate.js';

page(navbarTemplate);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/tasks', createView);

page.start();