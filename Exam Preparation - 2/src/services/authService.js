export const saveUSer = (user) => {
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

