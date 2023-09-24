import { html, render } from "../node_modules/lit-html/lit-html.js";
import { getAges } from "../requests/agesRequest.js";

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