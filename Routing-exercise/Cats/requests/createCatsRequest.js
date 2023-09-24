export const createCatsReq = (name, breed, age) => {
    fetch('http://localhost:3030/jsonstore/cats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify({name, breed, age})
    })
    .then(() => alert('Successfull request'))
    .catch(err => alert(err));
}