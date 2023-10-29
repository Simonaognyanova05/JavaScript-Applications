import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { getOne } from "../services/requests.js";

const detailsTemplate = (fruit, user) => html`
<section id="details">
        <div id="details-wrapper">
          <img id="details-img" src=${fruit.imageUrl} alt="example1" />
          <p id="details-title">${fruit.name}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p>${fruit.description}</p>
              <p id="nutrition">Nutrition</p>
              <p id="details-nutrition">${fruit.nutrition}</p>
            </div>

            ${
              user._id == fruit._ownerId 
              ? html` <div id="action-buttons">
              <a href="/fruits/${fruit._id}/edit" id="edit-btn">Edit</a>
              <a href="/fruits/${fruit._id}/delete" id="delete-btn">Delete</a>
            </div>`
            : nothing
            }
           
          </div>
        </div>
      </section>
`;

export const detailsView = (ctx) => {
  getOne(ctx.params.fruitId)
  .then(fruit => {

    render(detailsTemplate(fruit, ctx.user), document.querySelector('main'));
  })
}