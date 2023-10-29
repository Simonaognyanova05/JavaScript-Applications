import { getUser } from "../services/authService.js"

export const authMiddleware = (ctx, next) => {
    ctx.user = getUser();

    next();
}