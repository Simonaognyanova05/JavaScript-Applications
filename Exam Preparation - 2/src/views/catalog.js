import { html, render } from '../../node_modules/lit-html/lit-html.js';

import { getAllGames } from '../services/requests.js';


const ifHasGames = (game) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${game.imageUrl}>
        <h6>Action</h6>
        <h2>${game.title}</h2>
        <a href="#" class="details-button">Details</a>
    </div>
</div>
`;

const noGame = html`
<h3 class="no-articles">No articles yet</h3>
`;
const catalogTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    <!-- Display div: with information about every game (if any) -->
    
    ${games ? games.map(x => ifHasGames(x)) : noGame}
    <!-- Display paragraph: If there is no games  -->
</section>
`;

export const catalogView = () => {
    getAllGames()
    .then(games => {
        render(catalogTemplate(games), document.querySelector('#main-content'));
    })
}