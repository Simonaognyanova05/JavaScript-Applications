import * as authService from '../services/authService.js'

export const login = (email, password) => {
    return fetch('http://localhost:3030/users/login', {
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
}