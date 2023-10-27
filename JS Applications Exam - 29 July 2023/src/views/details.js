import { html, nothing, render } from '../../node_modules/lit-html/lit-html.js';
import { getOne } from '../services/requests.js';

const detailsTemplate = (fact, user) => html`
  <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src=${fact.imageUrl} alt="example1" />
          <p id="details-category">${fact.category}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p id="description">
              ${fact.description}
              </p>
              <p id="more-info">
              ${fact.moreInfo}
              </p>
            </div>

            <h3>Likes:<span id="likes">0</span></h3>

            <!--Edit and Delete are only for creator-->
            ${
              user._id == fact._ownerId
              ? html`<div id="action-buttons">
              <a href="" id="edit-btn">Edit</a>
              <a href="/facts/${fact._id}/edit" id="delete-btn">Delete</a>

            </div>`
            :nothing
            }
            
          </div>
        </div>
      </section>
`;

export const detailsView = (ctx) => {
  getOne(ctx.params.factId)
  .then(fact => {
    
    render(detailsTemplate(fact, ctx.user), document.querySelector('main'));
  })
}