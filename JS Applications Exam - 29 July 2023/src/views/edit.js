import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getOne, edit } from '../services/requests.js';

const editTemplate = (fact, submitHandler) => html`
<section id="edit">
        <div class="form">
          <h2>Edit Fact</h2>
          <form class="edit-form" @submit=${submitHandler}>
            <input type="text" name="category" id="category" value="${fact.category}" />
            <input type="text" name="imageUrl" id="image-url" value=${fact.imageUrl} />
            <textarea id="description" name="description" rows="10" cols="50">${fact.description}</textarea>
            <textarea id="additional-info" name="additional-info" rows="10"
              cols="50">${fact['additional-info']}</textarea>
            <button type="submit">Post</button>
          </form>
        </div>
      </section>
`;

export const editView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();

    let factId = ctx.params.factId;
    const data = Object.fromEntries(new FormData(e.currentTarget));

    edit(factId, data)
      .then(() => {
        ctx.page.redirect(`/facts/${factId}`);
      })
    console.log(data);
  }
  getOne(ctx.params.factId)
    .then(fact => {
      render(editTemplate(fact, submitHandler), document.querySelector('main'));
    })
}