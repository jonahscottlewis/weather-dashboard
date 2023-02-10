var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // fetch request gets a list of all 
  var cityInput = document.querySelector('.cityInput').value
  var requestlatlongUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&appid=825001e63987e7b8f9f6d2229d4bda71';
  fetch(requestlatlongUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&appid=825001e63987e7b8f9f6d2229d4bda71'
      fetch(requestUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data)

          var weather = document.getElementById('weather')
          weather.innerHTML = data.main.temp + 'F';

        })
    });
};
// event listener for clicking the fetchButton to respond to click to get API
fetchButton.addEventListener('click', getApi);
