import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { edit } from '../services/requests.js';

const editTemplate = (submitHandler) => html`
    <section id="edit">
        <h2>Edit Motorcycle</h2>
        <div class="form">
          <h2>Edit Motorcycle</h2>
          <form class="edit-form" @submit=${submitHandler}>
            <input type="text" name="model" id="model" placeholder="Model" />
            <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" />
            <input type="number" name="year" id="year" placeholder="Year" />
            <input type="number" name="mileage" id="mileage" placeholder="mileage" />
            <input type="number" name="contact" id="contact" placeholder="contact" />
            <textarea id="about" name="about" placeholder="about" rows="10" cols="50"></textarea>
            <button type="submit">Edit Motorcycle</button>
          </form>
        </div>
      </section>
`;

export const editView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    edit(ctx.params.motorId, data)
    .then(() => {
      ctx.page.redirect(`/motorcycles/${ctx.params.motorId}`)
    })
    console.log(data);
  }
  render(editTemplate(submitHandler), document.querySelector('main'));
}