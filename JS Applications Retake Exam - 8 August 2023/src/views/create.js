import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { create } from '../services/requests.js';

const createTemplate = (submitHandler) => html`
  <section id="create">
        <h2>Add Motorcycle</h2>
        <div class="form">
          <h2>Add Motorcycle</h2>
          <form class="create-form" @submit=${submitHandler}> 
            <input type="text" name="model" id="model" placeholder="Model" />
            <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" />
            <input type="number" name="year" id="year" placeholder="Year" />
            <input type="number" name="mileage" id="mileage" placeholder="mileage" />
            <input type="text" name="contact" id="contact" placeholder="contact" />
            <textarea id="about" name="about" placeholder="about" rows="10" cols="50"></textarea>
            <button type="submit">Add Motorcycle</button>
          </form>
        </div>
      </section>
`;

export const createView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    create(data)
    .then(() => {
      ctx.page.redirect('/dashboard');
    })
  }
    render(createTemplate(submitHandler), document.querySelector('main'));
}