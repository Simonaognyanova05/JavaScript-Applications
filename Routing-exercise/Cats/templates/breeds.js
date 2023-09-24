import { html, render } from '../node_modules/lit-html/lit-html.js';

const getBreeds = () => 
    fetch('http://localhost:3030/jsonstore/cats')
    .then(res => res.json())
    .then(result => Object.values(result))
    .catch(err => alert(err));

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