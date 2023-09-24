import page from '../node_modules/page/page.mjs';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { createView } from './create.js';


let guests = document.querySelector('#guest');

const navLoggedTemplate = () => html`
<a id="loginLink" href="/create">Create Furniture</a>
<a id="registerLink" href="/my-furniture" class="active">My Publications</a>
<a id="registerLink" href="/login" class="active">Logout</a>
`;

export const navLoggedView = () => {
    render(navLoggedTemplate(), guests);
    page('/create', createView);
}