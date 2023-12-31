import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { edit, getOne } from '../services/requests.js';

const editTemplate = (game, submitHandler) => html`
<section id="edit-page" class="auth">
            <form id="edit" @submit=${submitHandler}>
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value="${game.title}">

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" value="${game.category}">

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value="${game.maxLevel}">

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value="${game.imageUrl}">

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>
`;

export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let gameId = ctx.params.gameId;
        const data = Object.fromEntries(new FormData(e.currentTarget));

        edit(gameId, data)
        .then(() => {
            ctx.page.redirect(`/games/${gameId}`);
        })
        console.log(data);
    }
    getOne(ctx.params.gameId)
    .then(game => {

        render(editTemplate(game, submitHandler), document.querySelector('#main-content'));
    })
}