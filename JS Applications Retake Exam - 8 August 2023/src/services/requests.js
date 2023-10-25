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


export const logout = () => {
    return fetch(`${baseUrl}/users/logout`, {
        headers: { 'X-Authorization': authService.getToken() }
    })
        .then(() => {
            authService.deleteUser();
        })
}


export const getAllMotorcicles = () => {
    return fetch(`${baseUrl}/data/motorcycles?sortBy=_createdOn%20desc`)
        .then(res => res.json());
}

export const getOne = (motorId) => {
    return fetch(`${baseUrl}/data/motorcycles/${motorId}`)
    .then(res => res.json());
}

export const create = (data) => {
    return fetch(`${baseUrl}/data/motorcycles`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': authService.getToken()
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

export const edit = (motorId, data) => {
    return fetch(`${baseUrl}/data/motorcycles/${motorId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': authService.getToken()
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json());
}