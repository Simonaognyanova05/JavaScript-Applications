import page from '../node_modules/page/page.mjs';
import { createView } from './template/createTemplate.js';
import { homeView } from './template/homeTemplate.js';
import { loginView } from './template/loginТemplate.js';
import { registerView } from './template/registerTemplate.js';

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/tasks', createView);

page.start();