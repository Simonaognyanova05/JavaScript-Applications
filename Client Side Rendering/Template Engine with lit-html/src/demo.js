import {html, render} from '../node_modules/lit-html/lit-html.js';

const template = (items, styleClass) => html`
<h1>Hello</h1>

${items.length === 0
    ? html`<p>No users</p>`
    : ''
}


<ul class=${styleClass}>
${items.map(x => html`<li>${x}</li>`)}
</ul>


<button ?disabled=${items.length > 6} @click=${() => clicking()}>Add</button>
`;

const names = ['Pesho', 'Gosho', 'Mariya'];
const root = document.getElementById('root');
render(template(names, 'vertical'), root);

function clicking(){
    names.push('Pesho ' + Math.random());
render(template(names, 'vertical', false), root);

}