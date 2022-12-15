// var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=48.03&lon=7.01&appid=50ec15776b6ffbb8aa15e79cad0a6321" // clé openweather perso
var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=49.1193089&lon=6.1757156&appid=50ec15776b6ffbb8aa15e79cad0a6321"
const tempDiv = document.getElementById("temperature");
const icon = document.getElementById("weatherIcon")

fetch(weatherUrl)
  .then((response) => response.json())
  .then((thisWeather) => main(thisWeather));

function main(thisWeather){
    Weather=thisWeather;
    console.log(Weather.main.temp);
    tempDiv.textContent=Math.round((Weather.main.temp-273)*10)/10 + "C°"
    console.log(Weather)
    console.log(Weather.weather);
}
