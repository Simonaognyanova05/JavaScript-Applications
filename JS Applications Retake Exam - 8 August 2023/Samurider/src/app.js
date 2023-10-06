import page from "../node_modules/page/page.mjs";
import { createView } from "./templates/create.js";
import { dashboardView } from "./templates/dashboard.js";
import { detailsView } from "./templates/details.js";
import { editView } from "./templates/edit.js";
import { homeView } from "./templates/homePage.js";
import { loginView } from "./templates/login.js";
import { navbarView } from "./templates/navbar.js";
import { noUsersView } from "./templates/noUsers.js";
import { registerView } from "./templates/register.js";
import { searchView } from "./templates/search.js";

navbarView();
page('/', homeView);
page('/dashboard', dashboardView);
page('/nousers', noUsersView);
page('/register', registerView);
page('/login', loginView);
page('/create', createView);
page('/edit', editView);
page('/details', detailsView);
page('/search', searchView);

page.start();