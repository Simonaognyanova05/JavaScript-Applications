import { html, render } from '../../node_modules/lit-html/lit-html.js';

const homeTamplate = () => html`
<h1>Home Page</h1>
`;

export const homeView = (ctx) => {
    render(homeTamplate(), document.querySelector('#root'));
}