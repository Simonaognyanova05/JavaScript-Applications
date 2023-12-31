import { render } from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../views/navigation.js";


export const renderNavigation = (ctx, next) => {
    render(navigationView(ctx), document.querySelector('header'));

    next();
}