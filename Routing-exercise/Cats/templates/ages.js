import { html, render } from "../node_modules/lit-html/lit-html.js";

const getAges = () => 
    fetch('http://localhost:3030/jsonstore/cats')
    .then(res => res.json())
    .then(result => Object.values(result))
    .catch(err => alert(err));

const ageTemplate = (ages) => html`
<h3>Ages</h3>
<ul>
${ages.map(x => html`<li>${x.age}</li>`)}
</ul>
`;

export const agesView = () => {
    getAges()
    .then(ages => {
        render(ageTemplate(ages), document.querySelector('#root'));
    })
}