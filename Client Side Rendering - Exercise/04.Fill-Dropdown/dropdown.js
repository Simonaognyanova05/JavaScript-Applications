let url = 'http://localhost:3030/jsonstore/advanced/dropdown';

let selectMenu = document.getElementById('menu');
let inputText = document.getElementById('itemText');
let addBtn = document.querySelector('input[type="submit"]');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(url, {
        method: 'POST',
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify({text: inputText.value}),
    })
    .then(res => res.json())
    .then(result => console.log(result))
    .catch(err => console.log(err));
});

function getValues(){
    return fetch(url)
    .then(res => res.json())
    .then(result => Object.values(result))
    .catch(err => console.log(err));
}


const result = await getValues();

function createOptions(){
    result.forEach(x => {
        let option = document.createElement('option');
        option.textContent = x.text;
        selectMenu.appendChild(option);
    })
}

createOptions();

// function addItem() {
    
// }