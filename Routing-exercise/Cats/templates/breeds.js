import { html, render } from '../node_modules/lit-html/lit-html.js';

const breedsTemplate = () => html`
<h3>Cats' Breeds</h3>
<ul>
   <li>Persian cat</li>
</ul>
`;

export const breedsView = () => {
    render(breedsTemplate(), document.querySelector('#root'));
}