import { saveUser } from "./authService.js";

const baseUrl = `http://localhost:3030`;

export const login = (data) => {
    return fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(user => {
        saveUser(user);

        return user;
    });
}