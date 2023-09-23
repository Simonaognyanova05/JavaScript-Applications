import { html, render } from '../node_modules/lit-html/lit-html.js';
import { navLoggedView } from './navLogged.js';

const createProfile = (e) => {
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
    .then(() => {
        guests.innerHTML = '';
        navLoggedView();
    })
}
const registerTemplate = () => html`
<div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${createProfile}>
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
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    </div>
`;

export const registerView = () => {
    render(registerTemplate(), document.querySelector('#root'));
}