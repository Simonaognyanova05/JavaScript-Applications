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

export const logout = () =>
    fetch(`${baseUrl}/users/logout`, { headers: { 'X-Authorization': authService.getToken() } })
        .then(() => {
            authService.deleteUser();
        });

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

export const getAll = () => {
    return fetch(`${baseUrl}/data/facts?sortBy=_createdOn%20desc`)
    .then(res => res.json());
}

export const create = (data) => {
    return fetch(`${baseUrl}/data/facts`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': authService.getToken() 
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

export const getOne = (factId) => {
    return fetch(`${baseUrl}/data/facts/${factId}`)
    .then(res => res.json());
}