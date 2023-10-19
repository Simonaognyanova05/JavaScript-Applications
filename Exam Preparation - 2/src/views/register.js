import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../services/requests.js';

const registerTemplate = (submitHandler) => html`
<section id="register-page" class="content auth">
            <form id="register" @submit=${submitHandler}>
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">
 
                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        let {email, password} = Object.fromEntries(new FormData(e.currentTarget));
        let confirmPass = document.getElementById('confirm-password').value;

        if(password != confirmPass){
            alert('Passwords are not matching');
            return;
        }

        register(email, password)
        .then(() => {
            ctx.page.redirect('/');
        })
    }
    render(registerTemplate(submitHandler), document.querySelector('#main-content'));
}