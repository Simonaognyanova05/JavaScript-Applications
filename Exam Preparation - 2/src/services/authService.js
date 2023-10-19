const saveUSer = (user) => {
    if(user.accessToken){
        localStorage.setItem('user', JSON.stringify(user));
    }
}

export const getUser = () => {
    let serializedUser = localStorage.getItem('user');
    
    if(serializedUser){
        let user = JSON.parse(serializedUser);

        return user;
    }
}

export const login = (email, password) => {
    return fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(res => res.json())
    .then(user => {
        saveUSer(user);
        return user;
    })
}