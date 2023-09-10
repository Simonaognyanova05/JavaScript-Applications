import navBarTemplate from '../templates/navbar.js';
import contactListTemplate from '../templates/contactList.js';

const mainTemplate = (data) => `
<header>
${navBarTemplate()}
</header>
<main>
${contactListTemplate(data.contacts)}
</main>
`;

export default mainTemplate;