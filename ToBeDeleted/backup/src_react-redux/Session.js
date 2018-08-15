import Cookies from 'universal-cookie';
const cookie = new Cookies()

export const setUser = user => {
    return user ? cookie.set('user', user, {path: '/'}) : cookie.remove('user', {path: '/'})
}

export const getUser = () => {
    return cookie.get('user') || null
}