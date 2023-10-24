import { html, render } from '../../node_modules/lit-html/lit-html.js';

const createTemplate = () => html`
  <section id="create">
        <h2>Add Motorcycle</h2>
        <div class="form">
          <h2>Add Motorcycle</h2>
          <form class="create-form">
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

export const createView = () => {
    render(createTemplate(), document.querySelector('main'));
}