import page from "../node_modules/page/page.mjs";

import { renderMiddleware } from "./middlewares/renderMiddleware.js";
import { homeView } from "./views/home.js";

page(renderMiddleware);
page('/', homeView);

page.start();