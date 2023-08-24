function attachEvents() {
    let loadBtn = document.getElementById('btnLoad');
    let createBtn = document.getElementById('btnCreate');

    let url = 'http://localhost:3030/jsonstore/phonebook';

    let phonebookList = document.getElementById('phonebook');
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');


    loadBtn.addEventListener('click', () => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                let keys = Object.keys(result);

                let values = Object.values(result);
                values.forEach(value => {
                    let liElement = document.createElement('li');
                    liElement.textContent = `${value.person}: ${value.phone}`;
                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    liElement.appendChild(deleteBtn);
                    phonebookList.appendChild(liElement);


                    deleteBtn.addEventListener('click', () => {
                        let url = `http://localhost:3030/jsonstore/phonebook/${value._id}`;

                        fetch(url, {
                            method: 'DELETE',
                            headers: {
                                'content-type': 'application/json'
                            }
                        })
                            .then(res => res.json())
                            .then(result => {
                                console.log('success');
                            })
                            .catch(err => console.log(err));
                    })
                })
            })
            .catch(err => console.log(err));
    })

    createBtn.addEventListener('click', () => {
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                person: personInput.value,
                phone: phoneInput.value,
            })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err));

        personInput.value = '';
        phoneInput.value = '';
    })
}

attachEvents();