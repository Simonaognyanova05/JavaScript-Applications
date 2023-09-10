import { render } from '../node_modules/lit-html/lit-html.js';
import mainTemplate from './templates/main.js';
import { getContacts } from './api.js';

const rootElement = document.getElementById('root');

const contacts = await getContacts();

render(mainTemplate({contacts, addContactHandler}), rootElement);

function addContactHandler(){
    fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({person: 'Magito', phone: '100'}),
    })
    .then(res => res.json())
    .then(contact => {
        render(mainTemplate({ contacts: [...contacts, contact] }), rootElement);
    })
    .catch(err => console.log(err));
}