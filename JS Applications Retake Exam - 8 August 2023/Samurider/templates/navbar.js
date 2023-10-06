import { html, render } from 'lit-html';

const loggedUsersTemplate = () => html`
<div class="user">
    <a href="#">Add Motorcycle</a>
    <a href="#">Logout</a>
</div>
`;

const guestUsersTemplate = () => html`
<div class="guest">
    <a href="#">Login</a>
    <a href="#">Register</a>            
</div>
`;
const navbarTemplate = () => html`
<a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="#">Motorcycles</a>
            <a href="#">Search</a>
          </div>

          <!-- Logged-in users -->
        
          <!-- Guest users -->
          
        </nav>
`;

export const navbarView = () => {
    document.querySelector('header').innerHTML = navbarTemplate();
}