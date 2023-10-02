import page from '../node_modules/page/page.mjs';
import { homeView } from './template/homeTemplate.js';
import { loginView } from './template/loginYemplate.js';
import { registerView } from './template/registerTemplate.js';

page('/', homeView);
page('/login', loginView);
page('/register', registerView);


page.start();