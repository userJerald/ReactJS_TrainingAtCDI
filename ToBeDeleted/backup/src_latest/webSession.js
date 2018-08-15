import Cookie from 'universal-cookie';

const cookie = new Cookie();

export const setSearch = (name,item) => {
    return cookie.set(name, item, {path:'/'});
}

export const removeSearch = (name) => {
    return cookie.remove(name, {path:'/'});
}

export const getSearch = (name) => {
    return cookie.get(name) || ''
}