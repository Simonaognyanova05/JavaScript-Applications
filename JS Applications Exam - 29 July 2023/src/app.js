import page from "../node_modules/page/page.mjs";
import { renderNavigationMiddleware } from "./middlewares/renderMiddlewares.js";

page(renderNavigationMiddleware);
page.start();