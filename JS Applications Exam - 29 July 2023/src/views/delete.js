import { getOne, remove } from "../services/requests.js";

export const deleteView = async (ctx) => {
    try {
        const fact = await getOne(ctx.params.factId)
        let confirmed = confirm(`Do you want to delete the fact: ${fact.category}`);

        if(confirmed){

            await remove(ctx.params.factId);
            ctx.page.redirect('/dashboard');
        }
    } catch (error) {
        alert(error);
    }
}