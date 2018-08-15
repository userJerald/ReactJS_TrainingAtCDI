const APP_KEY = '3907bb5142df0e730885efbce4e7a6c4'
const APP_URL = 'http://api.openweathermap.org'

export function fetchWeather (city = '',code = '') {
  city = city.trim()
  code = code.trim()

  return fetch(`${APP_URL}/data/2.5/forecast?q=${city},${code}&APPID=${APP_KEY}`)
    .then((res) => res.json())
    .then(( response ) => 
      response
    )
}