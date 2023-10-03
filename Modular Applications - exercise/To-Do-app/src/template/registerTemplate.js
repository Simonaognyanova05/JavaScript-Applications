import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../requests/registerRequest.js';

const registerData = (e) => {
  e.preventDefault();

  let formData = new FormData(e.currentTarget);
  let email = formData.get('email');
  let password = formData.get('password');

  register(email, username, password);
}

const registerTemplate = () => html`
<form @submit=${registerData} class="login">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="email" class="form-control" name="username" id="username" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" name="password" id="password">
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
</form>
`;

export const registerView = () => {
    render(registerTemplate(), document.querySelector('#root'));
}