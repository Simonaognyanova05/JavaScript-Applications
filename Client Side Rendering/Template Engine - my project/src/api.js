const url = 'http://localhost:3030/jsonstore/phonebook';

export const getContact = () => {
    return fetch(url)
    .then(res => res.json())
    .then(result => Object.values(result))
    .catch(err => alert(err));
}

export const postContact = () => {
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({person: 'Simona', phone: '12345'})
    })
    .then(res => res.json())
    .then(result => console.log(result))
    .catch(err => alert(err));
}