import { html, render } from '../../node_modules/lit-html/lit-html.js';


const loggedUsers = html`
<div id="user">
    <a href="#">Create Game</a>
    <a href="#">Logout</a>
</div>
`;

const guestUsers = html`
<div id="guest">
    <a href="#">Login</a>
    <a href="#">Register</a>
</div>
`;

const navbarTemplate = (user) => html`
<h1><a class="home" href="#">GamesPlay</a></h1>
<nav>
    <a href="#">All games</a>

    ${user
      ? loggedUsers
      : guestUsers}
   
</nav>
`;

export const navigationView = (ctx) => {
    return navbarTemplate(ctx.user);
}