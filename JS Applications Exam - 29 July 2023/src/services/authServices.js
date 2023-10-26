export const saveUser = (user) => {
    if(user.accessToken){
        localStorage.setItem('user', JSON.stringify(user));
    }
}
export const getUser = () => {
    const serialziaedUser = localStorage.getItem('user');

    if(serialziaedUser){
        let user = JSON.stringify(serialziaedUser);

        return user;
    }
}

export const deleteUser = () => {
    localStorage.removeItem('user');
}

export const getToken = () => {
    return getUser()?.accessToken;
}