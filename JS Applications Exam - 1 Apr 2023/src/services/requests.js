import { deleteUser, getToken, saveUser } from "./authService.js";

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
        saveUser(user);

        return user;
    });
}

export const logout = () => {
    return fetch(`${baseUrl}/users/logout`, {
        headers:{'X-Authorization': getToken()}
    })
    .then(() => {
        deleteUser();
    });
}

export const getAll = () => {
    return fetch(`${baseUrl}/data/fruits?sortBy=_createdOn%20desc`)
    .then(res => res.json());
}

export const getOne = (fruitId) => {
    return fetch(`${baseUrl}/data/fruits/${fruitId}`)
    .then(res => res.json());
}

export const create = (data) => {
    return fetch(`${baseUrl}/data/fruits`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': getToken()
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

export const edit = (data, fruitId) => {
    return fetch(`${baseUrl}/data/fruits/${fruitId}`, {
        method: 'PUt',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': getToken()
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}
