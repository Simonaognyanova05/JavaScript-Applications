import page from "../node_modules/page/page.mjs";
import { renderNavigation } from "./middlewares/renderMiddleware.js";
import { dashboardView } from "./views/dashboard.js";
import { homeView } from "./views/home.js";


page(renderNavigation);
page('/', homeView);
page('/dashboard', dashboardView);

page.start();