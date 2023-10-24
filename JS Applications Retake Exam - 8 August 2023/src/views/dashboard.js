import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAllMotorcicles } from '../services/requests.js';

const motorcycleTemplate = (motorcycle) => html`
 <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        <div class="motorcycle">
          <img src=${motorcycle.imageUrl} alt="example1" />
          <h3 class="model">${motorcycle.model}</h3>
          <p class="year">Year: ${motorcycle.year}</p>
          <p class="mileage">Mileage: ${motorcycle.mileage} km.</p>
          <p class="contact">Contact Number: ${motorcycle.contact}</p>
          <a class="details-btn" href="/details">More Info</a>
        </div>

  </section>
`;
const dashboardTemplate = (motorcycles) => html`
 <h2>Available Motorcycles</h2>
  ${motorcycles ? motorcycles.map(x => motorcycleTemplate(x)) : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
`;

export const dashboardView = () => {
  getAllMotorcicles()
  .then(motorcycles => {

    render(dashboardTemplate(motorcycles), document.querySelector('main'));
  })
}