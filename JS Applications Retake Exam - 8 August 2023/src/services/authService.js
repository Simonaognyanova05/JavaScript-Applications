
export const saveUser = (user) => {
    if(user.accessToken){
        localStorage.setItem('user', JSON.stringify(user));
    }
}

export const getUser = () => {
    let serializedUser = localStorage.getItem('user');

    if(serializedUser){
        let user = JSON.stringify(serializedUser);

        return user;
    }
}
export const getToken = () => {
    return getUser?.accessToken;
}

export const deleteUser = () => {
    localStorage.removeItem('user');
}