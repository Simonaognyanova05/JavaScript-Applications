import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getBreeds } from '../requests/breedsRequest.js';

const breedsTemplate = (breeds) => html`
<h3>Cats' Breeds</h3>
<ul>
   ${breeds.map(x => html`<li>${x.breed}</li>`)}
</ul>
`;

export const breedsView = () => {
    getBreeds()
    .then(breeds => {
        render(breedsTemplate(breeds), document.querySelector('#root'));
    })
}