import { getOne, remove } from "../services/requests.js";

export const deleteView = async (ctx) => {
    try {
        const game = await getOne(ctx.params.gameId)
        let confirmed = confirm(`Do you want to delete the album: ${game.title}`);

        if(confirmed){

            await remove(ctx.params.gameId);
            ctx.page.redirect('/catalog');
        }
    } catch (error) {
        alert(error);
    }
}