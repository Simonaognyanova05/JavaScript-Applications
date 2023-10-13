import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { loginReq } from '../requests/requests.js';

const mainElement = document.querySelector('#main-content');

const loginTemplate = (submitHandler) => html`
<section id="login-page" class="auth">
<form id="login">

    <div class="container">
        <div class="brand-logo"></div>
        <h1>Login</h1>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

        <label for="login-pass">Password:</label>
        <input type="password" id="login-password" name="password">
        <input type="submit" class="btn submit" value="Login" @click=${submitHandler}>
        <p class="field">
            <span>If you don't have profile click <a href="#">here</a></span>
        </p>
    </div>
</form>
</section>
`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let email = document.querySelector('#email');
        let password = document.querySelector('#login-password');

        loginReq(email.value, password.value)
        .then(() => {
            ctx.page.redirect('/');
        })
        .catch(err => {
            alert(err);
        })
    }
    render(loginTemplate(submitHandler), mainElement)
}