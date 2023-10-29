import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../services/requests.js";

const ifHasFruits = (fruit) => html`
<section id="dashboard">
        <div class="fruit">
          <img src=${fruit.imageUrl} alt="example1" />
          <h3 class="title">${fruit.name}</h3>
          <p class="description">${fruit.description}</p>
          <a class="details-btn" href="/fruits/${fruit._id}">More Info</a>
        </div>
      </section>
`;
const dashboardTemplate = (fruits) => html`
 <h2>Fruits</h2>
      
 ${fruits ? fruits.map(x => ifHasFruits(x)) : html`<h2>No fruit info yet.</h2>`}
      
`;

export const dashboardView = (ctx) => {
  getAll()
  .then(fruits => {
    render(dashboardTemplate(fruits), document.querySelector('main'));
  })
}