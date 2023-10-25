import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { edit, getOne } from '../services/requests.js';

const editTemplate = (motor, submitHandler) => html`
    <section id="edit">
        <h2>Edit Motorcycle</h2>
        <div class="form">
          <h2>Edit Motorcycle</h2>
          <form class="edit-form" @submit=${submitHandler}>
            <input type="text" name="model" id="model" value=${motor.model}/>
            <input type="text" name="imageUrl" id="moto-image" value=${motor.imageUrl} />
            <input type="number" name="year" id="year" value=${motor.year} />
            <input type="number" name="mileage" id="mileage" value=${motor.mileage} />
            <input type="number" name="contact" id="contact" value=${motor.contact} />
            <textarea id="about" name="about" rows="10" cols="50">${motor.about}</textarea>
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
  getOne(ctx.params.motorId)
  .then(motor => {

    render(editTemplate(motor, submitHandler), document.querySelector('main'));
  })
}