import page from "../node_modules/page/page.mjs";
import { dashboardView } from "./templates/dashboard.js";
import { homeView } from "./templates/homePage.js";
import { navbarView } from "./templates/navbar.js";
import { noUsersView } from "./templates/noUsers.js";
import { registerView } from "./templates/register.js";

navbarView();
page('/', homeView);
page('/dashboard', dashboardView);
page('/nousers', noUsersView);
page('/register', registerView);


page.start();