import * as authService from '../authService.js';


export const login = (email, password) => {
    return  fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
    .then(user => {
        authService.saveUser(user);
        return user;
    })
}