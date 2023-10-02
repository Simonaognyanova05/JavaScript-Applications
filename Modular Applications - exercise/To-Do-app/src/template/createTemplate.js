import { html, render } from '../../node_modules/lit-html/lit-html.js';

const createTask = () => html`
<h1>Add your task</h1>
<form class="row g-3">
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>
`;
export const createView = () => {
  render(createTask(), document.querySelector('#root'));
}