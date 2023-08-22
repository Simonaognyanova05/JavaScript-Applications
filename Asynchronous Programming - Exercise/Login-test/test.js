function login() {
    let userName = document.getElementById('userName');
    let password = document.getElementById('password');
    let button = document.getElementById('submit');
    let pElement = document.getElementById('result');

    let url = 'http://localhost:3030/jsonstore/login/profiles';
    button.addEventListener('click', (e) => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                if(result.hasOwnProperty(userName.value)){
                    if(result[userName.value].password == password.value){
                        pElement.textContent = 'Успешно влизане';
                    }
                }else{
                    pElement.textContent = 'Невалидни данни';
                }
            })
            .catch((err) => console.log(err));
    })
}
login();