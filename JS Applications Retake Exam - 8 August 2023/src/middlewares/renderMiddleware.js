import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigation.js';

const headElement = document.querySelector('header');

export const renderNavigation = (ctx, next) => {
    render(navigationView(ctx), headElement);
    next();
}