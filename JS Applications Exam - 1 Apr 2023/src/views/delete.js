import { getOne, remove } from "../services/requests.js";

export const deleteView = async (ctx) => {
    try {
        const fruit = await getOne(ctx.params.fruitId)
        let confirmed = confirm(`Do you want to delete the album: ${fruit.name}`);

        if(confirmed){

            await remove(ctx.params.fruitId);
            ctx.page.redirect('/dashboard');
        }
    } catch (error) {
        alert(error);
    }
}