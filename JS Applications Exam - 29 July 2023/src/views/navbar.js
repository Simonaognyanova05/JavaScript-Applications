import { html, render } from '../../node_modules/lit-html/lit-html.js';

const loggedInUser = html`
<div class="user">
    <a href="/create">Add Fact</a>
    <a href="#">Logout</a>
</div>
`;

const guestUser = html`
<div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>            
</div>
`;
const navbarTemplate = (user) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt=""/></a>
<nav>
    <div>
        <a href="/dashboard">Fun Facts</a>
    </div>
    ${user ? loggedInUser : guestUser}      
</nav>
`;

export const navbarView = (ctx) => {
    return navbarTemplate(ctx.user);
}