const baseUrl = 'http://localhost:3030/users';

export const loginReq = (email, password) => {
    return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password}),
    })
    .then(res => res.json());
}