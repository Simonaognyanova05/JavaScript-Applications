import { html } from "../../node_modules/lit-html/lit-html.js";

const loggedUser = html`
<div class="user">
    <a href="#">Add Fruit</a>
    <a href="#">Logout</a>
</div>
`;

const guestUser = html`
<div class="guest">
    <a href="#">Login</a>
    <a href="#">Register</a>        
</div>
`;
const navigationTemplate = (user) => html`
<a id="logo" href="/">
    <img id="logo-img" src="./images/logo.png" alt=""/>
</a>

<nav>
    <div>
        <a href="/dashboard">Fruits</a>
        <a href="#">Search</a>
    </div>
    ${user ? loggedUser : guestUser}          
</nav>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}