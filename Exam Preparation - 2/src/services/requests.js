import * as authService from '../services/authService.js'


let baseUrl = 'http://localhost:3030';
export const login = (email, password) => {
    return fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .then(user => {
            authService.saveUser(user);
            return user;
        })
        .catch(err => alert(err))

}

export const register = (email, password) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .then(user => {
            authService.saveUser(user);
            return user;
        })
        .catch(err => alert(err))
}

export const getAllGames = () => {
    return fetch(`${baseUrl}/data/games?sortBy=_createdOn%20desc`)
        .then(res => res.json());
}

export const logout = () => {
    return fetch(`${baseUrl}/users/logout`, {
        headers: { 'X-Authorization': authService.getToken() }
    })
        .then(() => {
            authService.deleteUser();
        })
}

export const getHomeGames = () => {
    return fetch(`${baseUrl}/data/games?sortBy=_createdOn%20desc&distinct=category`)
        .then(res => res.json());
}

export const create = (data) => {
    return fetch(`${baseUrl}/data/games`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
            'X-Authorization': authService.getToken()
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json());
}

export const getOne = (gameId) => {
    return fetch(`${baseUrl}/data/games/${gameId}`)
    .then(res => res.json());
}

export const edit = (gameId, data) => {
    return fetch(`${baseUrl}/data/games/${gameId}`, {
        method: 'PUT',
        headers:{
            'content-type': 'application/json',
            'X-Authorization': authService.getToken()
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json());
}

export const remove = (gameId) => {
    return fetch(`${baseUrl}/data/games/${gameId}`, {
        method: 'DELETE',
        headers:{
            'content-type': 'application/json',
            'X-Authorization': authService.getToken()
        }
    })
    .then(res => res.json());
}