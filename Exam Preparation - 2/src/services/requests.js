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
        authService.saveUSer(user);
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
        authService.saveUSer(user);
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