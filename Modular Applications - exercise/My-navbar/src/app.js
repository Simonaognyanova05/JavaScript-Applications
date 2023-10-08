import page from "../node_modules/page/page.mjs";
import { renderMiddleware } from "./middlewares/renderMiddleware.js";

page(renderMiddleware);

page.start();