import page from "../node_modules/page/page.mjs";
import { renderNavigation } from "./middlewares/renderMiddleware.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";

page(renderNavigation);
page('/', homeView);
page('/login', loginView);
page.start();