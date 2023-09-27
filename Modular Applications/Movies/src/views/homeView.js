import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../services/movieService.js';

const movieTemplate = (movie) => html`
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`;
const homeTamplate = (movies) => html`
<h1>Movie List</h1>

${movies.map(x => movieTemplate(x))};
`;

export const homeView = (ctx) => {
    movieService.getAll()
    .then(movies => {
        render(homeTamplate(movies), document.querySelector('#root'));
    })
}