var fetchButton = document.getElementById('form');
var savedSearches = JSON.parse(localStorage.getItem('search-history')) || [];
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

var newdate = month + "/" + day + "/" + year ;

// requesting URL for current day because 5 day forecast starts 1 day forward
function requestCurrentWeatherApi() {
  var cityInput = document.querySelector('.cityInput').value
  var requestCurrentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&units=imperial&appid=825001e63987e7b8f9f6d2229d4bda71';

  fetch(requestCurrentWeatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

      city.innerHTML = data.city.name;
      var date = document.getElementById('date')
      // use javascript function for date
      date.textContent = newdate //!! NEEDS TO BE REFORMATED TO MM/DD/YYYY !!
      var conditions = document.getElementById('conditions')
      conditions.innerHTML = data.list[2].weather[0].description
      var temp = document.getElementById('temp')
      temp.innerHTML = data.main.temp + ' F';
      var humidity = document.getElementById('humidity')
      humidity.innerHTML = data.main.humidity
      var wind = document.getElementById('wind')
      wind.innerHTML = data.wind.speed + ' mph'

    })
}


function getApi(e) {
  e.preventDefault()
  // fetch request gets a list of all 
  var cityInput = document.querySelector('.cityInput').value
  var requestForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&units=imperial&appid=825001e63987e7b8f9f6d2229d4bda71';

  //Making sure weatherData is available. (May not be needed)
  var weatherData = null

  //Getting access to API 
  fetch(requestForecastUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      fetch(requestForecastUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          //looping through temperature at 12 noon 5 days in a row and getting desired information from data (data.list.length)
          for (i = 2; i < data.list.length; i = i + 8) {
            console.log(data.list[i].main.temp + 'F');

            var date1 = document.getElementById('date-1')
            date1.innerHTML = data.list[2].dt_txt.split(' ')[0] //!! NEEDS TO BE REFORMATED TO MM/DD/YYYY !!
            var conditions = document.getElementById('conditions-1')
            conditions.innerHTML = data.list[2].weather[0].description
            var temp1 = document.getElementById('temp-1')
            temp1.innerHTML = data.list[2].main.temp + ' F';
            var humidity1 = document.getElementById('humidity-1')
            humidity1.innerHTML = data.list[2].main.humidity
            var wind1 = document.getElementById('wind-1')
            wind1.innerHTML = data.list[2].wind.speed + ' mph';

            var date2 = document.getElementById('date-2')
            date2.innerHTML = data.list[10].dt_txt.split(' ')[0] //!! NEEDS TO BE REFORMATED TO MM/DD/YYYY !!
            var conditions2 = document.getElementById('conditions-2')
            conditions2.innerHTML = data.list[10].weather[0].description
            var temp2 = document.getElementById('temp-2')
            temp2.innerHTML = data.list[10].main.temp + ' F';
            var humidity2 = document.getElementById('humidity-2')
            humidity2.innerHTML = data.list[10].main.humidity
            var wind2 = document.getElementById('wind-2')
            wind2.innerHTML = data.list[10].wind.speed + ' mph';

            var date3 = document.getElementById('date-3')
            date3.innerHTML = data.list[18].dt_txt.split(' ')[0] //!! NEEDS TO BE REFORMATED TO MM/DD/YYYY !!
            var conditions3 = document.getElementById('conditions-3')
            conditions3.innerHTML = data.list[18].weather[0].description
            var temp3 = document.getElementById('temp-3')
            temp3.innerHTML = data.list[18].main.temp + ' F';
            var humidity3 = document.getElementById('humidity-3')
            humidity3.innerHTML = data.list[18].main.humidity
            var wind3 = document.getElementById('wind-3')
            wind3.innerHTML = data.list[18].wind.speed + ' mph';

            var date4 = document.getElementById('date-4')
            date4.innerHTML = data.list[26].dt_txt.split(' ')[0] //!! NEEDS TO BE REFORMATED TO MM/DD/YYYY !!
            var conditions4 = document.getElementById('conditions-4')
            conditions4.innerHTML = data.list[26].weather[0].description
            var temp4 = document.getElementById('temp-4')
            temp4.innerHTML = data.list[26].main.temp + ' F';
            var humidity4 = document.getElementById('humidity-4')
            humidity4.innerHTML = data.list[26].main.humidity
            var wind4 = document.getElementById('wind-4')
            wind4.innerHTML = data.list[26].wind.speed + ' mph';

            var date5 = document.getElementById('date-5')
            date5.innerHTML = data.list[34].dt_txt.split(' ')[0] //!! NEEDS TO BE REFORMATED TO MM/DD/YYYY !!
            var conditions5 = document.getElementById('conditions-2')
            conditions5.innerHTML = data.list[34].weather[0].description
            var temp5 = document.getElementById('temp-5')
            temp5.innerHTML = data.list[34].main.temp + ' F';
            var humidity5 = document.getElementById('humidity-5')
            humidity5.innerHTML = data.list[34].main.humidity
            var wind5 = document.getElementById('wind-2')
            wind5.innerHTML = data.list[34].wind.speed + ' mph';

            // Creating empty array to be filled with current [i]
            // var weatherDivs = []
            // Looping through the 5 cards desired(1 for each day's forecast) [Right now is creating a never ending loop]
            // for (i=2; i< weatherDivs.length; i = i+5){
            // var weatherCard = document.createElement('div');
            // weatherCard.classList.add("weatherCard");
            // weatherCard.textContent = [i]};

          }

          //Making data available to the global scope? Incase needed.
          //console.log(data)
          weatherData = data
          //console.log(weatherData)

          // adding the value of the current temp to weather div in HTML
          var city = document.getElementById('city')
          city.innerHTML = data.city.name;
          var date = document.getElementById('date')
          date.innerHTML = data.list[0].dt_txt.split(' ')[0] //!! NEEDS TO BE REFORMATED TO MM/DD/YYYY !!
          var conditions = document.getElementById('conditions')
          conditions.innerHTML = data.list[0].weather[0].description
          var temp = document.getElementById('temp')
          temp.innerHTML = data.list[0].main.temp + ' F';
          var humidity = document.getElementById('humidity')
          humidity.innerHTML = data.list[0].main.humidity
          var wind = document.getElementById('wind')
          wind.innerHTML = data.list[0].wind.speed + ' mph';


          //will need to fetch the api for the cards
          // var requestIconUrl = 'http://api.openweathermap.org/data/2.5/weather?q= + cityInput + ''
          // var requestIconUrl = ' http://openweathermap.org/img/wn/10d@2x.png'
          //fetch(requestIconUrl)

          setCity();

        })
    });
};

// Will erase local storage when page refreshed !! needs to be fixed !!
function setCity() {
  //Get the value of the city search fiels
  var citySearch = document.getElementById('city-search').value;

  //save the search in LocalStorage
  //localStorage.setItem('searchHistory', citySearch);
  savedSearches.push(citySearch);
  localStorage.setItem('search-history', JSON.stringify(savedSearches));
}

// event listener for clicking the fetchButton to respond to click to get API
fetchButton.addEventListener('submit', getApi);
fetchButton.addEventListener('keyup', function(e){
e.preventDefault()
  console.log(e.key)
  // Enter key corresponds to number 13
  if (e.key === 'Enter') {
  }
})

// for (i=0; i < citySearch.length; i++){

//var historyList = document.getElementbyId('search-history');
// document.appendChild("li")

// }

//}