import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../services/requests.js";

const registerTemplate = (submitHandler) => html`
<section id="register">
        <div class="form">
          <h2>Register</h2>
          <form class="register-form" @submit=${submitHandler}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
          </form>
        </div>
      </section>

`;

export const registerView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.currentTarget));

    if(data.password != data['re-password']){
      alert('Passwords do not match!');

      return;
    }

    register(data)
    .then(() => {
      ctx.page.redirect('/');
    })
  }
    render(registerTemplate(submitHandler), document.querySelector('main'));
} 