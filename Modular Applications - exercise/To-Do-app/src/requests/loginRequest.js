import page from '../../node_modules/page/page.mjs';

export const login = (email, password) => {
    return fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .then(() => {
            document.querySelector('#login').style.display = 'none';
            document.querySelector('#register').style.display = 'none';
            document.querySelector('#tasks').style.display = 'block';
            page.redirect('/');
        });
}