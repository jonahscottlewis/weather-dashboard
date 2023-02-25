var fetchButton = document.getElementById('form');
var searchList = document.getElementById('last-five');
var savedSearches = JSON.parse(localStorage.getItem('search-history')) || [];
var newDate = dayjs().format('MMMM D, YYYY');

// requesting URL for current day because 5 day forecast starts 1 day forward
function getCurrentWeatherApi(e) {
  e.preventDefault()
  var cityInput = document.querySelector('.cityInput').value
  var getCurrentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&units=imperial&appid=825001e63987e7b8f9f6d2229d4bda71';

  fetch(getCurrentWeatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

      //current day not working
      var city = document.getElementById('city')
      city.textContent = data.name;
      var icon = document.getElementById('icon')
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      var date = document.getElementById('date')
      // use javascript function for date
      date.textContent = newDate //!! NEEDS TO BE REFORMATED TO MM/DD/YYYY !!
      var conditions = document.getElementById('conditions')
      conditions.textContent = data.weather[0].description
      var temp = document.getElementById('temp')
      temp.textContent = data.main.temp + ' F';
      var humidity = document.getElementById('humidity')
      humidity.textContent = data.main.humidity
      var wind = document.getElementById('wind')
      wind.textContent = data.wind.speed + ' mph'
    
    })
}

function getApi(e) {
  e.preventDefault()
  
  // fetch request gets a list of all 
  var cityInput = document.querySelector('.cityInput').value
  var requestForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&units=imperial&appid=825001e63987e7b8f9f6d2229d4bda71';

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

            var city1 = document.getElementById('city-1')
            city1.textContent = data.city.name;
            var icon1 = document.getElementById('icon-1')
            icon1.src = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`
            var date1 = document.getElementById('date-1')
            date1.textContent = data.list[2].dt_txt.split(' ')[0] //!! NEEDS TO BE REFORMATED TO MM/DD/YYYY !!
            var conditions = document.getElementById('conditions-1')
            conditions.textContent = data.list[2].weather[0].description
            var temp1 = document.getElementById('temp-1')
            temp1.textContent = data.list[2].main.temp + ' F';
            var humidity1 = document.getElementById('humidity-1')
            humidity1.textContent = data.list[2].main.humidity + '%';
            var wind1 = document.getElementById('wind-1')
            wind1.textContent = data.list[2].wind.speed + ' mph';
           
            var city2 = document.getElementById('city-2')
            city2.textContent = data.city.name;
            var icon2 = document.getElementById('icon-2')
            icon2.src = `https://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@2x.png`
            var date2 = document.getElementById('date-2')
            date2.textContent = data.list[10].dt_txt.split(' ')[0] //!! NEEDS TO BE REFORMATED TO MM/DD/YYYY !!
            var conditions2 = document.getElementById('conditions-2')
            conditions2.textContent = data.list[10].weather[0].description
            var temp2 = document.getElementById('temp-2')
            temp2.textContent = data.list[10].main.temp + ' F';
            var humidity2 = document.getElementById('humidity-2')
            humidity2.textContent = data.list[10].main.humidity + '%';
            var wind2 = document.getElementById('wind-2')
            wind2.textContent = data.list[10].wind.speed + ' mph';

            var city3 = document.getElementById('city-3')
            city3.textContent = data.city.name;
            var icon3 = document.getElementById('icon-3')
            icon3.src = `https://openweathermap.org/img/wn/${data.list[18].weather[0].icon}@2x.png`
            var date3 = document.getElementById('date-3')
            date3.textContent = data.list[18].dt_txt.split(' ')[0] //!! NEEDS TO BE REFORMATED TO MM/DD/YYYY !!
            var conditions3 = document.getElementById('conditions-3')
            conditions3.textContent = data.list[18].weather[0].description
            var temp3 = document.getElementById('temp-3')
            temp3.textContent = data.list[18].main.temp + ' F';
            var humidity3 = document.getElementById('humidity-3')
            humidity3.textContent = data.list[18].main.humidity + '%';
            var wind3 = document.getElementById('wind-3')
            wind3.textContent = data.list[18].wind.speed + ' mph';
            
            var city4 = document.getElementById('city-4')
            city4.textContent = data.city.name;
            var icon4 = document.getElementById('icon-4')
            icon4.src = `https://openweathermap.org/img/wn/${data.list[26].weather[0].icon}@2x.png`
            var date4 = document.getElementById('date-4')
            date4.textContent = data.list[26].dt_txt.split(' ')[0] //!! NEEDS TO BE REFORMATED TO MM/DD/YYYY !!
            var conditions4 = document.getElementById('conditions-4')
            conditions4.textContent = data.list[26].weather[0].description
            var temp4 = document.getElementById('temp-4')
            temp4.textContent = data.list[26].main.temp + ' F';
            var humidity4 = document.getElementById('humidity-4')
            humidity4.textContent = data.list[26].main.humidity + '%';
            var wind4 = document.getElementById('wind-4')
            wind4.textContent = data.list[26].wind.speed + ' mph';
            
            var city5 = document.getElementById('city-5')
            city5.textContent = data.city.name;
            var icon5 = document.getElementById('icon-5')
            icon5.src = `https://openweathermap.org/img/wn/${data.list[34].weather[0].icon}@2x.png`
            var date5 = document.getElementById('date-5')
            date5.textContent = data.list[34].dt_txt.split(' ')[0] //!! NEEDS TO BE REFORMATED TO MM/DD/YYYY !!
            var conditions5 = document.getElementById('conditions-5')
            conditions5.textContent = data.list[34].weather[0].description
            var temp5 = document.getElementById('temp-5')
            temp5.textContent = data.list[34].main.temp + ' F';
            var humidity5 = document.getElementById('humidity-5')
            humidity5.textContent = data.list[34].main.humidity + '%';
            var wind5 = document.getElementById('wind-5')
            wind5.textContent = data.list[34].wind.speed + ' mph';
            
          }

          setCity();
          
        })
    });
};

function setCity() {
  //Get the value of the city search field
  var citySearch = document.getElementById('city-search').value;
  savedSearches.push(citySearch);
  localStorage.setItem('search-history', JSON.stringify(savedSearches));
}

function displayHistory() {
  searchList.innerHTML = "";
  // recent searches list
  if (localStorage.getItem('search-history')) {
    for (var i = savedSearches.length < 5 ? 0 : savedSearches.length - 5; i < savedSearches.length; i++) {
      var searches = document.createElement('a');
      // giving class so can be grabbed with querySelector and used in searchRecent function below
      
      searches.innerHTML = savedSearches[i];
      searches.addEventListener(onload, function (event) {
        savedSearches.value = event.target.textContent;
      })
      searchList.append(searches)
    }
  }
} displayHistory()

// event listener for clicking the fetchButton to respond to click to get API
fetchButton.addEventListener('submit', getApi);

// Event liatener to submit form when enter key pressed
fetchButton.addEventListener('submit', getCurrentWeatherApi);
fetchButton.addEventListener('keyup', function (e) {
  e.preventDefault()
  if (e.key === 'Enter') {
  }
})