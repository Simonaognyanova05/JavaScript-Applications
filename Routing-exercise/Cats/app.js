import page from "./node_modules/page/page.mjs";
import { namesView } from "./templates/names.js";
import { breedsView } from "./templates/breeds.js";

page('/names', namesView);
page('/breeds', breedsView);


page.start();