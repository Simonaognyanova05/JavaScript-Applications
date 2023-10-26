import * as authService from "./authServices.js";

const baseUrl = 'http://localhost:3030';

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
            authService.saveUser(user);

            return user;
        });
}
export const register = (data) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(user => {
            authService.saveUser(user);

            return user;
        });
}

export const logout = () => {
    return fetch(`${baseUrl}/users/logout`, {
        headers: { 'X-Authorization': authService.getToken() }
    })
        .then(() => {
            authService.deleteUser();
        })
}