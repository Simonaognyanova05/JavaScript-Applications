import { html, render } from '../node_modules/lit-html/lit-html.js';

const getNames = () => 
   fetch('http://localhost:3030/jsonstore/cats')
   .then(res => res.json())
   .then(result => Object.values(result));


const namesTemplate = (names) => html`
<h3>Cats' names</h3>
<ul>
${names.map(x => html`<li>${x.name}</li>`)}
</ul>
`;

export const namesView = () => {
    getNames()
    .then(names => {
        render(namesTemplate(names), document.querySelector('#root'));
    })
}