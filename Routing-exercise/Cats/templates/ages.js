import { html, render } from "../node_modules/lit-html/lit-html.js";

const ageTemplate = () => html`
<h3>Ages</h3>
<ul>
<li>5</li>
</ul>
`;

export const agesView = () => {
    render(ageTemplate(), document.querySelector('#root'));
}