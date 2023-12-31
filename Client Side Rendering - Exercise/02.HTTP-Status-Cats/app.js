import {html, render} from './node_modules/lit-html/lit-html.js';
import { cats } from "./catSeeder.js";

let allCatsSection = document.getElementById('allCats');
allCatsSection.addEventListener('click', toggle);
const liElementContent = (data) => html`
    <ul>
    ${data.map(cat => html`
    
    <li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
        <div class="status" style="${cat.info ? 'display: block' : 'display: none'}" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
    </li>
    `)}
    </ul>
    `;
cats.forEach(c => c.info = false);
update();

function update(){
    const result = liElementContent(cats);
    render(result, allCatsSection);
}

function toggle(event){
    const elementId = event.target.parentNode.querySelector('.status').id;
    const cat = cats.find(c => c.id === elementId);
    cat.info = !cat.info;
    update();
}