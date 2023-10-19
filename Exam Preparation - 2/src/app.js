import page from "../node_modules/page/page.mjs";

import { renderMiddleware } from "./middlewares/renderMiddleware.js";
import { createView } from "./views/create.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";

page(renderMiddleware);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/edit', editView);

page.start();