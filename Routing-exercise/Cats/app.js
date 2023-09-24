import page from "./node_modules/page/page.mjs";
import { namesView } from "./templates/names.js";

page('/names', namesView);

page.start();