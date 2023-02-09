var fetchButton = document.getElementById('fetch-button');

function getApi() {
    // fetch request gets a list of all 
    var weatherInput = document.querySelector('.weatherInput').value
    var requestlatlongUrl = 'https://api.openweathermap.org/geo/1.0/zip?zip=' + weatherInput + '&appid=301abb42e89fddd7a250ac02d53fe894';
  
    fetch(requestlatlongUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        var longitude = data.lon
        var latitude = data.lat
        console.log(longitude, latitude)
        var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=imperial&appid=301abb42e89fddd7a250ac02d53fe894'
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data)
            // Puts current temperature into weather sidebar
            var temperatureElement = document.getElementById('temp')
            temperatureElement.innerHTML = data.main.temp + 'F';
            // Puts max temperature into weather sidebar
            var maxtemperatureElement = document.getElementById('maxtemp')
            maxtemperatureElement.innerHTML = data.main.temp_max + 'F';
            // Puts min temperature into weather sidebar
            var mintemperatureElement = document.getElementById('mintemp')
            mintemperatureElement.innerHTML = data.main.temp_min + 'F';
            // Puts humidity into weather sidebar
            var humidityElement = document.getElementById('humidity')
            humidityElement.innerHTML = data.main.humidity + '%';
            // Puts wind speed into weather sidebar
            var windspeedElement = document.getElementById('windspeed')
            windspeedElement.innerHTML = data.wind.speed + 'mph';
          })
      });
  };
  // event listener for clicking the fetchButton to respond to click to get API
  fetchButton.addEventListener('click', getApi);