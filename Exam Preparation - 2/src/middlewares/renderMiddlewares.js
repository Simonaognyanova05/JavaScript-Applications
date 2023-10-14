import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';


let headerElement = document.querySelector('.header-navigation');
export const renderNavigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), headerElement);
    next();
};
