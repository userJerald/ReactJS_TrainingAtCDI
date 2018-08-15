import Cookie from 'universal-cookie';

const cookie= new Cookie();

export const setUser = (user) => {
    return cookie.set('user', user, {path:'/'});
}

export const removeUser = () => {
    return cookie.remove('user', {path:'/'});
};

export const getUser = () => {
    return cookie.get('user') || null;
}