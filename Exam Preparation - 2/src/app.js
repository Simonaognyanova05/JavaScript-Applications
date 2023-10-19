import page from "../node_modules/page/page.mjs";

import { renderMiddleware } from "./middlewares/renderMiddleware.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";

page(renderMiddleware);
page('/', homeView);
page('/login', loginView);


page.start();