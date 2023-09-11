let button = document.getElementById('btnLoadTowns');
let towns = document.getElementById('towns');
let root = document.getElementById('root');

let ulElement = document.createElement('ul');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let arr = towns.value.split(', ');

    arr.forEach(x => {
        let li = document.createElement('li');
        li.textContent = x;

        ulElement.appendChild(li);
    })
    root.appendChild(ulElement);
})