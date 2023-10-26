import page from "../node_modules/page/page.mjs";
import { renderNavigationMiddleware } from "./middlewares/renderMiddlewares.js";
import { dashboardView } from "./views/dashboard.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";

page(renderNavigationMiddleware);
page('/', homeView);
page('/dashboard', dashboardView);
page('/register', registerView);
page('/login', loginView);

page.start();