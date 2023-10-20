import * as authService from '../services/authService.js'


let baseUrl = 'http://localhost:3030';
export const login = (email, password) => {
    return fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
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
        body: JSON.stringify({email, password})
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
        headers: {'X-Authorization': authService.getToken()}
    })
    .then(() => {
        authService.deleteUser();
    })
}