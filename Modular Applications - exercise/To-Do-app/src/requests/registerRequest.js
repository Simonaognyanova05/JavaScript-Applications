import page from '../../node_modules/page/page.mjs';

export const register = (email, username, password) => {
    return fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, username, password })
    })
        .then(res => res.json())
        .then(() => {
            page.redirect('/');
            console.log('success');
        })
}