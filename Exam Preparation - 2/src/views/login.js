import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';

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

        let email = document.getElementById('email').value;
        let password = document.getElementById('login-password').value;

        authService.login(email, password)
        .then(() => {
            ctx.page.redirect('/'); 
        })
        console.log(email, password);

    }
    render(loginTemplate(submitHandler), document.querySelector('#main-content'));
}