import { html, render } from '../../node_modules/lit-html/lit-html.js';

const homeTemlate = () => html`
<h1>Home Page</h1>
`;

export const homeView = () => {
    render(homeTemlate(), document.querySelector('#root'));
}