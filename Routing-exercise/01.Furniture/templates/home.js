import { html, render } from '../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
`;

export const homeView = () => {
    render(homeTemplate(), document.querySelector('#root'));
}