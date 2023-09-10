import mainTemplate from './templates/main.js';
import render from './templates/render.js';
import { getContacts } from './api.js';

const rootElement = document.getElementById('root');

const contacts = await getContacts();

render(mainTemplate({contacts}), rootElement);

window.addContact =  function(){
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