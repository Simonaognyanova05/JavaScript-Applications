import { html, render } from '../node_modules/lit-html/lit-html.js';

const noUsersTemplate = () => html`
<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>
`;

export const noUsersView = () => {
    document.querySelector('main').innerHTML = '';
    render(noUsersTemplate(), document.querySelector('main'));
}