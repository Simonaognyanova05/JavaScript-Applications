function attachEvents() {
    let submitBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');

    const authorInput = document.querySelector('input[name="author"]');
    const contentInput = document.querySelector('input[name="content"]');

    const messagesArea = document.getElementById('messages');

    let url = 'http://localhost:3030/jsonstore/messenger';


    submitBtn.addEventListener('click', () => {
        
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                author: authorInput.value,
                content: contentInput.value
            })
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
    })

    refreshBtn.addEventListener('click', () => {
        fetch(url)
        .then(res => res.json())
        .then(result => {
            let values = Object.values(result);
            let arr = [];
            values.forEach(value => {
                arr.push(`${value.author}: ${value.content}`);
                messagesArea.textContent = arr.join('\n');
            })
        })
        .catch(err => console.log(err));
    })


}

attachEvents();