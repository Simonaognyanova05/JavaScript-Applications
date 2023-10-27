import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { create } from '../services/requests.js';

const createTemplate = (submitHandler) => html`
<section id="create">
    <div class="form">
        <h2>Add Fact</h2>
        <form class="create-form" @submit=${submitHandler}>
            <input type="text" name="category" id="category" placeholder="Category" />
            <input type="text" name="imageUrl" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"
              cols="50"></textarea>
            <button type="submit">Add Fact</button>
        </form>
    </div>
</section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));

        create(data)
        .then(() => {
            ctx.page.redirect('/dashboard')
        })
        console.log(data);
    }
    render(createTemplate(submitHandler), document.querySelector('main'));
}