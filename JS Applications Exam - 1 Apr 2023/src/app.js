import page from "../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authMiddlewares.js";
import { renderNavigation } from "./middlewares/renderMiddleware.js";
import { createView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { logoutView } from "./views/logout.js";
import { registerView } from "./views/register.js";

page(authMiddleware);
page(renderNavigation);
page('/', homeView);
page('/dashboard', dashboardView);
page('/register', registerView);
page('/login', loginView);
page('/create', createView);
page('/edit', editView);
page('/fruits/:fruitId', detailsView);
page('/fruits/:fruitId/edit', editView);

page('/logout', logoutView);



page.start();