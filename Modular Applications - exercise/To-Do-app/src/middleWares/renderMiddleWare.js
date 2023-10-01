import { render,html } from "../../node_modules/lit-html/lit-html.js";
import { navbarTemplate } from "../templates/navbarTemplate.js";

const navbar = document.querySelector('#navbar');
const ctxRender = (ctx, templateResult) => {
    let layout = html`
       <nav>
       ${navbarTemplate(ctx)}
       </nav>
       <main>
       ${templateResult}
       </main>
    `;
    render(layout, root);
};

export const renderMiddleWare = (ctx, next) => {
    render(ctxRender.bind(null, ctx), navbar);
    next();
}