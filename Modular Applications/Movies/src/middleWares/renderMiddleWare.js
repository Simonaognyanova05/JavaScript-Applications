import { render } from "../../node_modules/lit-html/lit-html.js";

export const renderMiddleWare = (ctx, next) => {
    const root = document.querySelector('#root');

    ctx.render = (templateResult) => render(templateResult, root);
    next();
}