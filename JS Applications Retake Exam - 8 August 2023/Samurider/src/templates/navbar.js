import { html, render } from '../../node_modules/lit-html/lit-html.js';

const loggedUsersTemplate =  `
<div class="user">
    <a href="#">Add Motorcycle</a>
    <a href="#">Logout</a>
</div>
`;

const guestUsersTemplate = `
<div class="guest">
    <a href="#">Login</a>
    <a href="#">Register</a>            
</div>
`;
export const navbarTemplate =  `
<a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="/dashboard">Motorcycles</a>
            <a href="/search">Search</a>
          </div>

          <!-- Logged-in users -->
          
        
          <!-- Guest users -->
          ${guestUsersTemplate}
        </nav>
`;

export const navbarView = () => {
 document.querySelector('#wrapper header').innerHTML = navbarTemplate;
}