import { html, render } from '../node_modules/lit-html/lit-html.js';
import { createCatsReq } from '../requests/createCatsRequest.js';

const createCat = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let name = formData.get('name');
    let breed = formData.get('breed');
    let age = formData.get('age');

    createCatsReq(name, breed, age);
}
const createTemplate = () => html`
<h3>Create new cat</h3>
<form @submit=${createCat}>
<input type="text" placeholder="Name of cat" name="name">
<input type="text" placeholder="Breed of cat" name="breed">
<input type="text" placeholder="Age of cat" name="age">
<input type="submit" name="submit" value="Submit">
</form>
`;

export const createView = () => {
    render(createTemplate(), document.querySelector('#root'));
}