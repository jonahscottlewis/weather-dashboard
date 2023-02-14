var fetchButton = document.getElementById('fetch-button');
var savedSearches = [];
if (localStorage.searchHistory) {
 // savedSearches = JSON.parse(localStorage.getItem('searchHistory'))
}
else {
  localStorage.setItem('searchHistory', JSON.stringify(savedSearches))
};

//Using Jquery to submit form when 'enter' key pressed
// Wait for document to load
$(document).ready(() => {
  $('.info').on('submit', () => {

    // prevents default behaviour
    // Prevents event propagation
    return false;
  });
});
$('.info').keypress((e) => {

  // Enter key corresponds to number 13
  if (e.which === 13) {
    $('.info').submit();
  }
});


function getApi() {
  // fetch request gets a list of all 
  var cityInput = document.querySelector('.cityInput').value
  var requestForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&units=imperial&appid=825001e63987e7b8f9f6d2229d4bda71';
  // Creating variable for icons URL
  // var requestIconUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityInput +''

  //Making sure weatherData is available. (May not be needed)
  var weatherData = null

  //Getting access to API 
  fetch(requestForecastUrl)
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
          for (i = 2; i < data.list.length; i = i + 8) {
            console.log(data.list[i].main.temp + 'F');
            // Creating empty array to be filled with current [i]
            // var weatherDivs = []
            // Looping through the 5 cards desired(1 for each day's forecast) [Right now is creating a never ending loop]
            // for (i=2; i< weatherDivs.length; i = i+5){
            // var weatherCard = document.createElement('div');
            // weatherCard.classList.add("weatherCard");
            // weatherCard.textContent = [i]};

          }

          //Making data available to the global scope? Incase needed.
          console.log(data)
          weatherData = data
          console.log(weatherData)

          // adding the value of the current temp to weather div in HTML
          var city = document.getElementById('city')
          city.innerHTML = data.city.name;
          var date = document.getElementById('date')
          date.innerHTML = data.list[0].clouds.dt_txt
          var conditions = document.getElementById('conditions')
          conditions.innerHTML = data.list[0].weather[0]
          var temp = document.getElementById('temp')
          temp.innerHTML = data.list[0].main.temp + ' F'; 
          var humidity = document.getElementById('humidity')
          humidity.innerHTML = data.list[0].main.humidity
          var wind = document.getElementById('wind')
          wind.innerHTML = data.list[0].wind.speed + ' mph';

          
          //will need to fetch the api for the cards
          //fetch(requestIconUrl)

          setCity();

        })
    });
};

window.onload = function () {
  //Check for LocalStorage support
  if (localStorage) {
    // Add event listener for form submissions
    document.getElementById('form').addEventListener('submit', function () {
      //Get the value of the city search fiels
      var citySearch = document.getElementById('city-search').value;

      //save the search in LocalStorage
      localStorage.setItem('city-search', citySearch);
    });
  }
}

function setCity() {
  //Get the value of the city search fiels
  var citySearch = document.getElementById('city-search').value;

  //save the search in LocalStorage
  //localStorage.setItem('searchHistory', citySearch);
  savedSearches.push(citySearch);
  localStorage.setItem('searchHistory', savedSearches);
}

//window.onload = function() {

// Retrieve the users search history.
// var citySearch = localStorage.getItem('searchHistory');

// for (i=0; i < citySearch.length; i++){

//var historyList = document.getElementbyId('search-history');
// document.appendChild("li")

// }

//}

// event listener for clicking the fetchButton to respond to click to get API
fetchButton.addEventListener('click', getApi);

// name of city = data.city.name
// date = data.list[0].clouds.dt_txt
// weather conditions = data.list[0].weather[0].description
// humidity = data.list[0].main.humidity
// wind speed = data.list[0].wind.speed
