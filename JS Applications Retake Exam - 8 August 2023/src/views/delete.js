import { getOne, deleteMotor } from "../services/requests.js";

export const deleteView = async (ctx) => {
    try {
        const motor = await getOne(ctx.params.motorId)
        let confirmed = confirm(`Do you want to delete the album: ${motor.model}`);

        if(confirmed){

            await deleteMotor(ctx.params.motorId);
            ctx.page.redirect('/dashboard');
        }
    } catch (error) {
        alert(error);
    }
}