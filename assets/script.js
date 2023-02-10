var fetchButton = document.getElementById('fetchButton');

function getApi() {
  // fetch request gets a list of all 
  var cityInput = document.querySelector('.cityInput').value
  var requestlatlongUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&appid=825001e63987e7b8f9f6d2229d4bda71';
  //Making sure weatherData is available. (May not be needed)
  var weatherData = null

  //Getting access to API 
  fetch(requestlatlongUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&units=imperial&appid=825001e63987e7b8f9f6d2229d4bda71'
      fetch(requestUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          //looping through temperature at 12 noon 5 days in a row and getting desired information from data (data.list.length)
           for (i=2; i<data.list.length; i = i+8){
            console.log(data.list[i].main.temp + 'F');
            // Looping through the 5 cards desired(1 for each day's forecast) [Right now is creating a never ending loop]
            // var weatherDivs = []
            // for (i=0; i< weatherDivs; i+5){}
            // var weatherCard = document.createElement('div');
            // weatherCard.classList.add("weatherCard");
            // weatherCard.textContent = [i];
            
           }

           //Making data available to the global scope? Incase needed.
          console.log(data)
          weatherData = data
          console.log(weatherData)

          // adding the value of the current temp to weather div in HTML
          var weather = document.getElementById('weather')
          weather.innerHTML = data.list[0].main.temp + 'F';
          

          //will need to fetch the api for the cards
          //fetch()
        })
    });
};
// event listener for clicking the fetchButton to respond to click to get API
fetchButton.addEventListener('click', getApi);

