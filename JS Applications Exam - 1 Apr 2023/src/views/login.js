import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../services/requests.js";

const loginTemplate = (submitHandler) => html`
<section id="login">
        <div class="form">
          <h2>Login</h2>
          <form class="login-form" @submit=${submitHandler}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </section>
`;

export const loginView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.currentTarget));

    login(data)
    .then(() => {
      ctx.page.redirect('/');
    })
  }
  render(loginTemplate(submitHandler), document.querySelector('main'));
}