import { html, nothing, render } from '../../node_modules/lit-html/lit-html.js';
import { getOne } from '../services/requests.js';


const detailsTemplate = (motor, user) => html`
    <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src=${motor.imageUrl} alt="example1" />
          <p id="details-title">${motor.model}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p class="year">Year: ${motor.year}</p>
              <p class="mileage">Mileage: ${motor.mileage} km.</p>
              <p class="contact">Contact Number: ${motor.contact}</p>
              <p id="motorcycle-description">
              ${motor.about}
              </p>
            </div>

            ${
              user._id == motor._ownerId
              ?
              html`
              <div id="action-buttons">
              <a href="/motorcycles/${motor._id}/edit" id="edit-btn">Edit</a>
              <a href="" id="delete-btn">Delete</a>
            </div>
              `
              :nothing
            }
            <!--Edit and Delete are only for creator-->
            
          </div>
        </div>
      </section>
`;

export const detailsView = (ctx) => {
  getOne(ctx.params.motorId)
  .then(motor => {

    render(detailsTemplate(motor, ctx.user), document.querySelector('main'));
  })
}