import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { edit, getOne } from "../services/requests.js";

const editTemplate = (submitHandler, fruit) => html`
<section id="edit">
        <div class="form">
          <h2>Edit Fruit</h2>
          <form class="edit-form" @submit=${submitHandler}>
            <input type="text" name="name" id="name" value=${fruit.name} />
            <input type="text" name="imageUrl" id="Fruit-image" value=${fruit.imageUrl} />
            <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
              cols="50">${fruit.description}</textarea>
            <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50">${fruit.nutrition}</textarea>
            <button type="submit">post</button>
          </form>
        </div>
      </section>
`;

export const editView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.currentTarget));
    edit(data, ctx.params.fruitId)
    .then(() => {
      ctx.page.redirect('/dashboard');
    })
  }
  getOne(ctx.params.fruitId)
  .then(fruit => {
    render(editTemplate(submitHandler, fruit), document.querySelector('main'));
  })
}