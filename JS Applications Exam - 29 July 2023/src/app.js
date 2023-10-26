import page from "../node_modules/page/page.mjs";
import { renderNavigationMiddleware } from "./middlewares/renderMiddlewares.js";
import { dashboardView } from "./views/dashboard.js";
import { homeView } from "./views/home.js";

page(renderNavigationMiddleware);
page('/', homeView);
page('/dashboard', dashboardView);

page.start();