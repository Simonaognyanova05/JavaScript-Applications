import { html, render } from '../../node_modules/lit-html/lit-html.js';


const loggedUsers = html`
<div id="user">
    <a href="/create">Create Game</a>
    <a href="/logout">Logout</a>
</div>
`;

const guestUsers = html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`;

const navbarTemplate = (user) => html`
<h1><a class="home" href="/">GamesPlay</a></h1>
<nav>
    <a href="/catalog">All games</a>

    ${user
      ? loggedUsers
      : guestUsers}
   
</nav>
`;

export const navigationView = (ctx) => {
    return navbarTemplate(ctx.user);
}