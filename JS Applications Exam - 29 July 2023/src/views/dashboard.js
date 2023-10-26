import { html, render } from '../../node_modules/lit-html/lit-html.js';

const dashboardTemplate = () => html`
<h2>Fun Facts</h2>
        <section id="dashboard">
          <div class="fact">
            <img src="./images/fact 1.png" alt="example1" />
            <h3 class="category">History</h3>
            <p class="description">Uncover the intriguing tale of the shortest war in history!
               The Anglo-Zanzibar War of 1896 lasted a mere 38 minutes,
                making it an astonishingly brief conflict that's sure to leave
                 you amazed by the brevity of battle.</p>
            <a class="details-btn" href="">More Info</a>
          </div>
        </section>
         <!-- Display an h2 if there are no posts -->
<h2>No Fun Facts yet.</h2>
`;

export const dashboardView = (ctx) => {
    render(dashboardTemplate(), document.querySelector('main'));
}