const apiURL ='http://test.codedisruptors.com:3000/v1';

const headers ={'Accept': 'application/json', 'Content-Type': 'application/json'};

export const getCountries = () => 
    fetch(`${apiURL}/lookups/countries`, {
        'method': 'GET'
    })
    .then(res => res.json())

export const createCountry = (body) =>
    fetch(`${apiURL}/lookups/countries`, {
        'method': 'POST',
        'headers': headers,
        'body': JSON.stringify(body)
    })
    .then(res => res.json())

export const editCountry = (id, body) =>
    fetch(`${apiURL}/lookups/countries${id}`, {
        'method': 'PUT',
        'headers': headers,
        'body': JSON.stringify(body)
    })
    .then(res => res.json())

export const deleteCountry = (id) =>
    fetch(`${apiURL}/lookups/countries${id}`, {
        'method': 'DELETE'
    })
    .then(res => res.json())