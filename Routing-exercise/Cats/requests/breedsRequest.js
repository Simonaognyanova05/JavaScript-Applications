export const getBreeds = () => 
    fetch('http://localhost:3030/jsonstore/cats')
    .then(res => res.json())
    .then(result => Object.values(result))
    .catch(err => alert(err));