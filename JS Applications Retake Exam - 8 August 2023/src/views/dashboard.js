import { html, render } from '../../node_modules/lit-html/lit-html.js';

const dashboardTemplate = () => html`
 <h2>Available Motorcycles</h2>
      <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        <div class="motorcycle">
          <img src="./images/Honda Hornet.png" alt="example1" />
          <h3 class="model">Honda Hornet</h3>
          <p class="year">Year: 2006</p>
          <p class="mileage">Mileage: 45000 km.</p>
          <p class="contact">Contact Number: 0881234567</p>
          <a class="details-btn" href="#">More Info</a>
        </div>

      </section>
      <!-- Display an h2 if there are no posts -->
      <h2 class="no-avaliable">No avaliable motorcycles yet.</h2>
`;

export const dashboardView = () => {
    render(dashboardTemplate(), document.querySelector('main'));
}