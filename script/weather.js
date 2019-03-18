function getAPIdata() {

  var url = "http://api.openweathermap.org/data/2.5/weather";
  var apiKey ="29f33ae3a5898d85d1d991a0e0e7e4c5";
  var city = 'The Hague, nl';

  // construct request
  var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city + '&units=metric';

  // get current weather
  fetch(request)

  // parse to JSON format
  .then(function(response) {
    return response.json();
  })

  // render weather per day
  .then(function(response) {

    changeBackground(response);
    showAdvice(response);

  })

  // catch error
  .catch(function (error) {
    onAPIError(error);
  });
}

function changeBackground(response) {
      // render weatherCondition
    document.getElementById('weather').innerHTML = response.weather[0].description;
    var weather = response.weather[0].description;

    if (weather.includes('thunderstorm')) {
      document.body.style = 'background: #191970';
    } else if (weather.includes('drizzle')) {
      document.body.style = 'background: #808080';
    } else if (weather.includes('rain')) {
      document.body.style = 'background: #60C2DA';
    } else if (weather.includes('snow')) {
      document.body.style = 'background: #E7E7E7';
    } else if (weather.includes('clear')) {
      document.body.style = 'background: #91D5FF';
    } else if (weather.includes('clouds')) {
      document.body.style = 'background: #00568A';
    } else {
      document.body.style = 'background: #7992A1';
    }
}

function showAdvice(response) {

  // get temperature in Celcius
  var degC = response.main.temp;

  // render weather in DOM
  var weatherBox = document.getElementById('temperature');
  weatherBox.innerHTML = degC + "&#176;C <br>";
}


function onAPIError(error) {
  console.error('Request failed', error);
  var weatherBox = document.getElementById('temperature');
  weatherBox.className = 'hidden';
}

// init data stream
getAPIdata();
