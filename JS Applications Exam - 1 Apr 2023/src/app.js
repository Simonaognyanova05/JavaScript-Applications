import page from "../node_modules/page/page.mjs";
import { renderNavigation } from "./middlewares/renderMiddleware.js";
import { dashboardView } from "./views/dashboard.js";
import { homeView } from "./views/home.js";
import { registerView } from "./views/register.js";


page(renderNavigation);
page('/', homeView);
page('/dashboard', dashboardView);
page('/register', registerView);


page.start();