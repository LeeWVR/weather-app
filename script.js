const weatherLocation = document.querySelector('.location');
const weatherNow = document.querySelector('.weather-now');





const weatherInfo = "";


async function getWeather() {
const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6099e44e7a6593a8e5f59474a322f966' , {mode: 'cors'} );
const weatherData = await response.json();
console.log(weatherData);

const city = weatherData.name;
const temp = weatherData.main.temp - 273.15;
const weatherDescription = weatherData.weather[0].description;

console.log(weatherDescription);
console.log(temp);
weatherLocation.textContent = city;
weatherNow.textContent = weatherDescription;

};

getWeather();