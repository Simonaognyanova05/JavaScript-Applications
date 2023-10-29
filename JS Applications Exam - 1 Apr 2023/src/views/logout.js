import { logout } from "../services/requests.js"

export const logoutView = (ctx) => {
    logout()
    .then(() => {
        ctx.page.redirect('/');
    })
}