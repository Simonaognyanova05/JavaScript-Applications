import { html, render } from '../node_modules/lit-html/lit-html.js';

const namesTemplate = () => html`
<h3>Cats' names</h3>
<ul>
<li>Goshko</li>
</ul>
`;

export const namesView = () => {
    render(namesTemplate(), document.querySelector('#root'));
}