import page from './node_modules/page/page.mjs';
import { homeView } from './templates/home.js';
import { loginView } from "./templates/login.js";
import { registerView } from './templates/register.js';

// const renders = {
//     '/login': loginView,
// }

page('/home', homeView);
page('/login', loginView);
page('/register', registerView);


page.start();