let received = null;

export const getUser = (user = received) => {
    return user || null;
}

export const setUser = (user) => {
    received = user;
}

let visited = false;

export const makePublicVisited = () => {
    visited = true;
}

export const isPublicVisited = (isVisited = visited) => {
    return isVisited;
}