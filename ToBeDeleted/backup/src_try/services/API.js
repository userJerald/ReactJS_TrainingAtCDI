const API_ID = '57ac09fd'
const APP_KEY = '9a7402b994ad05e3bb13d0d9fd602cea	'
const APP_URL = 'http://api.edamam.com'

export function fetchFood (food = '') {
  food = food.trim()

  return fetch(`${APP_URL}/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
    
}