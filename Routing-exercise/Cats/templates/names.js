import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getNames } from '../requests/namesRequest.js';

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