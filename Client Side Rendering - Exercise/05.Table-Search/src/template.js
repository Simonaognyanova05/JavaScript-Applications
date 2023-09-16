import {html} from '../node_modules/lit-html/lit-html.js';

export let template = (result) => html`
${result.map(x => html`
<tr>
<td>${x.firstName} ${x.lastName}</td>
<td>${x.email}</td>
<td>${x.course}</td>
</tr>
`)}
`;