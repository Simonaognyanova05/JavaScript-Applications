import { html, render } from '../node_modules/lit-html/lit-html.js';
import { navLoggedView } from './navLogged.js';

const root =  document.querySelector('#root');

const userLogin = (e) => {
    e.preventDefault();
    let guests = document.querySelector('#guest');
    let formData = new FormData(e.currentTarget);

    let email = formData.get('email');
    let password = formData.get('password');

    fetch('http://localhost:3030/jsonstore/users/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response JSON
      })
      .then(() => {
        guests.innerHTML = '';
        root.innerHTML = '';
        navLoggedView();
      })
      .catch(error => {
        console.error('Login error:', error);
      });

}
const loginTemplate = () => html`
<div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${userLogin}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
    </div>
`;

export const loginView = () => {
    render(loginTemplate(), root);
}