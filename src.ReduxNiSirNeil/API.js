const API_ID = '33123c51'
const APP_KEY = '6897c8b27b42ba2479407607cd2a1d8f';
const APP_URL = 'http://api.edamam.com'

export function fetchFood (food = '') {
  food = food.trim()

  console.log(food);

  return fetch(`${APP_URL}/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}