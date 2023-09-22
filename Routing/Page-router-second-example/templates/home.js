import { render, html } from '../node_modules/lit-html/lit-html.js'; 

const home = () => html`
<h1>Home</h1>
`;

let root = document.getElementById('root');

export const homeView = (ctx) => {
    render(home(), root);
};