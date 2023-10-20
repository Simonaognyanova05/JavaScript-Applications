import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { createGame } from '../services/requests.js';

const createTemplate = (submitHandler) => html`
<section id="create-page" class="auth">
<form id="create">
    <div class="container">

        <h1>Create Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" placeholder="Enter game title...">

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" placeholder="Enter game category...">

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary"></textarea>
        <input class="btn submit" type="submit" value="Create Game" @click=${submitHandler}>
    </div>
</form>
</section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const category = document.getElementById('category').value;
        const maxLevel = document.getElementById('maxLevel').value;
        const imageUrl = document.getElementById('imageUrl').value;
        const summary = document.getElementById('summary').value;


        createGame(title, category, maxLevel, imageUrl, summary)
        .then(() => {
            ctx.page.redirect('/');
        })
        console.log(title, category, maxLevel, imageUrl, summary);

    }
    render(createTemplate(submitHandler), document.querySelector('#main-content'));
}