import page from "../node_modules/page/page.mjs";
import { renderNavigation } from "./middlewares/renderMiddleware.js";
import { homeView } from "./views/home.js";


page(renderNavigation);
page('/', homeView);
page.start();