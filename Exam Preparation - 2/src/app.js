import page from "../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authMiddleware.js";

import { renderMiddleware } from "./middlewares/renderMiddleware.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";

page(authMiddleware);
page(renderMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/edit', editView);
page('/details', detailsView);
page('/catalog', catalogView);

page.start();