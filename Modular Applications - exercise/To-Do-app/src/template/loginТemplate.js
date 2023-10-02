import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../requests/loginRequest.js';

const loginData = (e) => {
  e.preventDefault();

  let formData = new FormData(e.currentTarget);
  let email = formData.get('email');
  let password = formData.get('password');

  login(email, password);
}

const loginTemplate = () => html`
<form @submit=${loginData} class="login">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" name="password" id="password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`;

export const loginView = () => {
    render(loginTemplate(), document.querySelector('#root'));
}