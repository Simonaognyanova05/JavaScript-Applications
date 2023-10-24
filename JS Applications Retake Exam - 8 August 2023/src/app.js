import page from "../node_modules/page/page.mjs";
import { renderNavigation } from "./middlewares/renderMiddleware.js";
import { createView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";

page(renderNavigation);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/dashboard', dashboardView);
page('/create', createView);
page('/details', detailsView);
page('/edit', editView);


page.start();