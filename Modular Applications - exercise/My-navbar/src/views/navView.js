import { html } from "../../node_modules/lit-html/lit-html.js";

const notAuthenticated = html`
<li class="nav-item">
  <a class="nav-link" href="#">Not authenticated</a>
</li>
`;

const authenticated = html`
<li class="nav-item">
  <a class="nav-link" href="#">Is authenticated</a>
 </li>
`;

export const navTemplate = (isAuthenticated) => html`
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          
          ${isAuthenticated 
            ? authenticated
            : notAuthenticated}
        </ul>
      </div>
    </div>
  </nav>
`;
