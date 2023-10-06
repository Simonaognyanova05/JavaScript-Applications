import { html, render } from '../../node_modules/lit-html/lit-html.js';

const detailsTemplate = () => html`
<section id="details">
<div id="details-wrapper">
  <img id="details-img" src="./images/Honda Hornet.png" alt="example1" />
  <p id="details-title">Honda Hornet</p>
  <div id="info-wrapper">
    <div id="details-description">
      <p class="year">Year: 2006</p>
      <p class="mileage">Mileage: 45000 km.</p>
      <p class="contact">Contact Number: 0881234567</p>
         <p id = "motorcycle-description">
          The Honda Hornet 2006 is a popular naked street bike known for its sporty design and powerful performance.
           It features a 599cc inline-four engine, delivering a thrilling riding experience with its responsive acceleration and agile handling.
              </p>
    </div>
     <!--Edit and Delete are only for creator-->
<div id="action-buttons">
  <a href="" id="edit-btn">Edit</a>
  <a href="" id="delete-btn">Delete</a>
</div>
  </div>
</div>
</section>
`;

export const detailsView = () => {
    document.querySelector('main').innerHTML = '';
    render(detailsTemplate(), document.querySelector('main'));
}