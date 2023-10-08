import { render } from "../../node_modules/lit-html/lit-html.js";
import { navTemplate } from "../views/navView.js";

const headerElement = document.querySelector('.header');
export const renderMiddleware = (ctx, next) => {
    render(navTemplate(), headerElement);
    next();
}