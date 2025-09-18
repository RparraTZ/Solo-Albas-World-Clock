function getMexicoData() {
  let city = document.getElementById("mexico-city");
  let cityName = city.querySelector(".CityName");
  let cityDate = city.querySelector(".CityDate");
  let cityTime = city.querySelector(".CityTime");
  cityDate.innerHTML = moment()
    .tz("America/Mexico_City")
    .format("dddd MMMM Do YYYY");
  cityTime.innerHTML = moment()
    .tz("America/Mexico_City")
    .format("h:mm:ss[<small>] A[</small]");
}
function getOsloData() {
  let city = document.getElementById("oslo");
  let cityName = city.querySelector(".CityName");
  let cityDate = city.querySelector(".CityDate");
  let cityTime = city.querySelector(".CityTime");
  cityDate.innerHTML = moment().tz("Europe/Oslo").format("dddd MMMM Do YYYY");
  cityTime.innerHTML = moment()
    .tz("Europe/Oslo")
    .format("h:mm:ss[<small>] A[</small]");
}

setInterval(getMexicoData, 1000);
setInterval(getOsloData, 1000);
let citiesSelectionElement = document.getElementById("cities");
citiesSelectionElement.addEventListener("change", getSelectionData);
