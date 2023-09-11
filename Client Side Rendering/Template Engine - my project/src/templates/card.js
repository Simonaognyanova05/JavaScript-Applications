import { html } from "../../node_modules/lit-html/lit-html.js";
import { postContact } from "../api.js";

const card = (contact, phone) => html`
<div class="card" style="width: 18rem;">
  <img src="https://i.pinimg.com/1200x/f3/3c/c0/f33cc07fa0044261d61a6645a67ef496.jpg" class="card-img-top" alt="contact">
  <div class="card-body">
    <h5 class="card-title">${contact}</h5>
    <p class="card-text">${phone}</p>
    <a href="#" class="btn btn-primary" @click=${postContact}>Go somewhere</a>
  </div>
</div>
`;



export default card;