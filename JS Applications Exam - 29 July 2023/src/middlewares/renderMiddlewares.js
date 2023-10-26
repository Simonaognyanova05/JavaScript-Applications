import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { navbarView } from '../views/navbar.js';


const headerElement = document.querySelector('header');

export const renderNavigationMiddleware = (ctx, next) => {
    render(navbarView(ctx), headerElement);
    next();
}