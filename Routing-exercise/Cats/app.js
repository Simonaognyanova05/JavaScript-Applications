import page from "./node_modules/page/page.mjs";
import { namesView } from "./templates/names.js";
import { breedsView } from "./templates/breeds.js";
import { agesView } from "./templates/ages.js";

page('/names', namesView);
page('/breeds', breedsView);
page('/ages', agesView);

page.start();