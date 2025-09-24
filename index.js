function updateTimeData() {
  let MXcity = document.getElementById("mexico-city");
  let MXcityDate = MXcity.querySelector(".CityDate");
  let MXcityTime = MXcity.querySelector(".CityTime");
  MXcityDate.innerHTML = moment()
    .tz("America/Mexico_City")
    .format("dddd MMMM Do YYYY");
  MXcityTime.innerHTML = moment()
    .tz("America/Mexico_City")
    .format("h:mm:ss[<small>] A[</small>]");

  let OsloCity = document.getElementById("oslo");
  let OsloCityDate = OsloCity.querySelector(".CityDate");
  let OsloCityTime = OsloCity.querySelector(".CityTime");
  OsloCityDate.innerHTML = moment()
    .tz("Europe/Oslo")
    .format("dddd MMMM Do YYYY");
  OsloCityTime.innerHTML = moment()
    .tz("Europe/Oslo")
    .format("h:mm:ss[<small>] A[</small>]");
}

function getSelectionData(event) {
  clearInterval(updateInterval);
  let selectedCity = event.target.value;
  if (selectedCity === "current") {
    selectedCity = moment.tz.guess();
  }
  let displayCityInfo = document.getElementById("CitiesDisplay");
  let cityName = selectedCity.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(selectedCity).format("dddd MMMM Do YYYY");
  let cityTime = moment()
    .tz(selectedCity)
    .format("h:mm:ss[<small>] A[</small]");
  displayCityInfo.innerHTML = `<div>
        <div class="Cities">
          <div>
            <h2 class="CityName">${cityName}</h2>
            <div class="CityDate">${cityDate}</div>
          </div>
          <div class="CityTime">${cityTime}</div>
        </div>
        </div>
       
         <a href="/">Back to home</a>`;
  setTimeout(function () {
    getSelectionData(event);
  }, 1000);
}
let updateInterval;
updateInterval = setInterval(updateTimeData, 1000);

let citiesSelectionElement = document.getElementById("cities");
citiesSelectionElement.addEventListener("change", getSelectionData);
