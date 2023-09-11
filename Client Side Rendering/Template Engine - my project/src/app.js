import { render } from "../node_modules/lit-html/lit-html.js";
import card from "./templates/card.js";
import { getContact } from "./api.js";

const rootElement = document.getElementById('root');


const resultGetContacts = await getContact();

render(card(resultGetContacts[0].person, resultGetContacts[0].phone), rootElement);