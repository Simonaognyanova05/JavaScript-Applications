let url = 'http://localhost:3030/jsonstore/advanced/table';

export function getData(){
   return fetch(url)
   .then(res => res.json())
   .then(result => Object.values(result))
   .catch(err => console.log(err));
}
