import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../requests/requests.js';
import { activeAtags } from '../utils.js';
const root = document.querySelector('.container');

const catalogLink = document.getElementById('catalogLink');
const createLink = document.getElementById('createLink');
const profileLink = document.getElementById('profileLink');
const logoutBtn = document.getElementById('logoutBtn');
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');

const homeTemplate = () =>
html`
<div class="row space-top">
<div class="col-md-12">
    <h1>Welcome to Furniture System</h1>
    <p>Select furniture from the catalog to view details.</p>
</div>
</div>
`

const templateItems = (items) =>
html`
    <div class="row space-top">

${items.map(item => html`   
<div class="col-md-4">
<div class="card text-white bg-primary">
    <div class="card-body">
            <img src="${item.img}" />
            <p>${item.description}</p>
            <footer>
                <p>Price: <span>${item.price} $</span></p>
            </footer>
            <div>
                <a href="${`/details/${item._id}`}" class="btn btn-info">Details</a>
            </div>
    </div>
</div>
</div>
`)}
</div>
`

export async function homeView() {
    let informations = await getAll();
    let templates = [];
    templates.push(homeTemplate());
    templates.push(templateItems(informations));
    activeAtags(catalogLink, [createLink, profileLink, logoutBtn, loginLink, registerLink]);
    render(templates, root);
}