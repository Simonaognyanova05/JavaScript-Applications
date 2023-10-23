import { html, nothing, render } from '../../node_modules/lit-html/lit-html.js';
import { getOne } from '../services/requests.js';


const comment = html`
<article class="create-comment">
    <label>Add new comment:</label>
    <form class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment">
    </form>
</article>

`;
const commentForEveryone = html`
<div class="details-comments">
        <h2>Comments:</h2>
        <ul>
            <!-- list all comments for current game (If any) -->
            <li class="comment">
                <p>Content: I rate this one quite highly.</p>
            </li>
            <li class="comment">
                <p>Content: The best game.</p>
            </li>
        </ul>
        <!-- Display paragraph: If there are no games in the database -->
        <p class="no-comment">No comments.</p>
    </div>
`;
const detailsTemplate = (game, user) => html`
<section id="game-details">
<h1>Game Details</h1>
<div class="info-section">

    <div class="game-header">
        <img class="game-img" src=${game.imageUrl} />
        <h1>${game.title}</h1>
        <span class="levels">MaxLevel: ${game.maxLevel}</span>
        <p class="type">${game.category}</p>
    </div>

    <p class="text">
        ${game.summary}
    </p>

    ${
        user._id == game._ownerId
        ? html`<div class="buttons">
        <a href="/games/${game._id}/edit" class="button">Edit</a>
        <a href="/games/${game._id}/delete" class="button">Delete</a>
    </div>`
    :nothing
    
    }
    
</div>

<!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
${comment}
</section>
`;

export const detailsView = (ctx) => {
    getOne(ctx.params.gameId)
    .then(game => {
        render(detailsTemplate(game, ctx.user), document.querySelector('#main-content'));
    })



}