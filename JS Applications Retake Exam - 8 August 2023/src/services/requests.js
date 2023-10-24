import * as authService from "./authService.js";


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
    })
    .catch(err => alert(err));
}

export const register = (email, password) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(user => {
        authService.saveUser(user);
        return user;
    })
    .catch(err => alert(err));
} 