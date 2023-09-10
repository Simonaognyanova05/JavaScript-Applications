import { html } from '../../node_modules/lit-html/lit-html.js';
import navBarTemplate from '../templates/navbar.js';
import contactListTemplate from '../templates/contactList.js';

const mainTemplate = (data) => html`
<header>
${navBarTemplate(data.addContactHandler)}
</header>
<main>
${contactListTemplate(data.contacts)}
</main>
`;

export default mainTemplate;