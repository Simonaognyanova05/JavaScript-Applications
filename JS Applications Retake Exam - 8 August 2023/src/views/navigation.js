import { html } from '../../node_modules/lit-html/lit-html.js';

const loggedUser = html`
<div class="user">
  <a href="/create">Add Motorcycle</a>
  <a href="/logout">Logout</a>
</div>
`;
const guestUser = html`
<div class="guest">
  <a href="/login">Login</a>
  <a href="/register">Register</a>
  
</div>
`;
const navigationTemplate = (user) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt=""/></a>

<nav>
<div>
  <a href="/dashboard">Motorcycles</a>
  <a href="#">Search</a>
</div>

${user ? loggedUser :guestUser}
</nav>
`;

export const navigationView = (ctx) => {
  return navigationTemplate(ctx.user);
}