import { html, render } from '../../node_modules/lit-html/lit-html.js';

const loggedUsers = () => html`
<div class="user">
<a href="#">Add Motorcycle</a>
<a href="#">Logout</a>
</div>
`;

const guestUsers = () => html`
<div class="guest">
            <a href="/login">Login</a>
            <a href="#">Register</a>
            
          </div>
`;
const permanentNav = () => html`
<div>
    <a href="/">Motorcycles</a>
    <a href="#">Search</a>
</div>  

${guestUsers()}
`;

export const navView = () => {
    const navElement = document.querySelector('nav');
    render(permanentNav(), navElement)
}