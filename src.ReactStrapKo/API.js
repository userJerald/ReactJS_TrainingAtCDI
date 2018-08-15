// const API_ID = '33123c51';
// const APP_KEY = '6897c8b27b42ba2479407607cd2a1d8f';
// const APP_URL = 'http://api.edamam.com';

// export function fetchItems (item = '') {
//     return fetch(`${APP_URL}/search?q=${item}&app_id=${API_ID}&app_key=${APP_KEY}`, {
//         'method': 'GET'
//     })
//     .then(res => res.json())
//     .then(({hits}) => hits.map(({recipe}) => recipe));
    
// }

// const APP_URL = 'https://world.openfoodfacts.org/api/v0/product/737628064502';

// export function fetchItems () {
//     return fetch(`${APP_URL}`, {
//         'method': 'GET'
//     })
//     .then(res => res.json())
//     .then((items) => items.product.ingredients)
//     .then((items) => {console.log(items)});
// }

//http://food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken
const APP_URL = 'http://food2fork.com/api';
const API_KEY = 'd05cdb8ce8df8a7e1fdcc2f94125b9f8';

export function fetchItems () {
    return fetch(`${APP_URL}/search?key=${API_KEY}`, {
        'method': 'GET'
    })
    .then(res => res.json())
    .then((items) => {
        console.log(items);
    });
}