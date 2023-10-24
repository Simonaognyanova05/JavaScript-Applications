import { html, render } from '../../node_modules/lit-html/lit-html.js';

const navigationTemplate = () => html`
<a id="logo" href="/"
><img id="logo-img" src="./images/logo.png" alt=""
/></a>

<nav>
<div>
  <a href="#">Motorcycles</a>
  <a href="#">Search</a>
</div>

<!-- Logged-in users -->
<div class="user">
  <a href="#">Add Motorcycle</a>
  <a href="#">Logout</a>
</div>

<!-- Guest users -->
<div class="guest">
  <a href="#">Login</a>
  <a href="#">Register</a>
  
</div>
</nav>
`;

export const navigationView = (ctx) => {
return navigationTemplate();
}