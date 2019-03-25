function getAPIdata() {

  var url = "https://api.openweathermap.org/data/2.5/weather";
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


    // put's description in ID weather
    document.getElementById('weather').innerHTML = response.weather[0].description;

    // makes variable weather and copy
    var weather = response.weather[0].description;
    var copy = '';

    // detect if the weather description contains string
    if (weather.includes('thunderstorm')) {
      document.body.style = 'background: #191970';
      copy = 'Het is geen goed weer om te landen. Haal lekker wat sushi in het restaurant. Zoek maar alvast wat lekkers uit.';
    } else if (weather.includes('drizzle')) {
      document.body.style = 'background: #808080';
      copy = 'Het miezert een beetje, maar dat is geen probleem om te landen. Bijn zijn we weer op aarde. Pak je paraplu maar vast, dan kan je zo lekker eten in het sushi restaurant naast de land plaats. Zoek maar alvast wat lekkers uit.';
    } else if (weather.includes('rain')) {
      document.body.style = 'background: #60C2DA';
      copy = 'Het regent, maar dat is geen probleem om te landen. Bijna zijn we weer op aarde. Pak je paraplu maar vast, dan kan je zo lekker eten in het sushi restaurant naast de land plaats. Zoek maar alvast wat lekkers uit.';
    } else if (weather.includes('snow')) {
      document.body.style = 'background: #E7E7E7';
      copy = 'Het sneeuwt, maar dat is geen probleem om te landen. Bijna zijn we weer op aarde. Pak je paraplu maar vast, dan kan je zo lekker eten in het sushi restaurant naast de land plaats. Zoek maar alvast wat lekkers uit.';
    } else if (weather.includes('clear')) {
      document.body.style = 'background: #91D5FF';
      copy = 'Het is heel mooi weer om te landen. Bijna zijn we weer op aarde. Dat is een goede reden om jezelf te verwennen met wat sushi. Zoek maar alvast wat lekkers uit.';
    } else if (weather.includes('clouds')) {
      document.body.style = 'background: #00568A';
      copy = 'Het is heel mooi weer om te landen. Bijna zijn we weer op aarde. Dat is een goede reden om jezelf te verwennen met wat sushi. Zoek maar alvast wat lekkers uit.';
    } else {
      document.body.style = 'background: #7992A1';
    }

    document.getElementById('landing').innerHTML = copy;
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
