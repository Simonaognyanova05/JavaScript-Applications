import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../services/requests.js';


const factTemplate = (fact) => html`
<section id="dashboard">
          <div class="fact">
            <img src=${fact.imageUrl} alt="example1" />
            <h3 class="category">${fact.category}</h3>
            <p class="description">${fact.description}</p>
            <a class="details-btn" href="/details">More Info</a>
          </div>
        </section>
`;
const dashboardTemplate = (facts) => html`
<h2>Fun Facts</h2>
        ${facts ? facts.map(x => factTemplate(x)) : html`<h2>No Fun Facts yet.</h2>`}
         <!-- Display an h2 if there are no posts -->

`;

export const dashboardView = (ctx) => {
  getAll()
  .then(facts => {

    render(dashboardTemplate(facts), document.querySelector('main'));
  })
}