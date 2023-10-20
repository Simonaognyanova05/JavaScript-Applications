import * as authService from '../services/authService.js'


let baseUrl = 'http://localhost:3030/users';
export const login = (email, password) => {
    return fetch(`${baseUrl}/login`, {
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
    return fetch(`${baseUrl}/register`, {
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

export const logout = () => {
    return fetch(`${baseUrl}/logout`, {
        'X-Authorization': authService.getToken()
    })
    .then(() => {
        authService.deleteUser();
    })
}

export const getAllGames = () => {
    return fetch(`${baseUrl}data/games?sortBy=_createdOn%20desc`)
    .then(res => res.json());
}