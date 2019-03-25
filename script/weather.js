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

function landingReady(response) {
  document.getElementById('landing').innerHTML = response.landing[0].description;
  var landing = response.landing[0].description;

  if (weather.includes('thunderstorm')) {
    document.getElementById('landing').innerHTML = 'Het is geen goed weer om te landen. Haal lekker wat sushi in het restaurant. Zoek maar alvast wat lekkers uit.';
  } else if (weather.includes('drizzle')) {
    document.getElementById('landing').innerHTML = 'Het miezert een beetje, maar dat is geen probleem om te landen. Bijn zijn we weer op aarde. Pak je paraplu maar vast, dan kan je zo lekker eten in het sushi restaurant naast de land plaats. Hiernaast kun je alvast kijken wat je lekker lijkt.';
  } else if (weather.includes('rain')) {
    document.getElementById('landing').innerHTML = 'Het regent, maar dat is geen probleem om te landen. Bijna zijn we weer op aarde. Pak je paraplu maar vast, dan kan je zo lekker eten in het sushi restaurant naast de land plaats. Zoek maar alvast wat lekkers uit.';
  } else if (weather.includes('snow')) {
    document.getElementById('landing').innerHTML = 'Het sneeuwt, maar dat is geen probleem om te landen. Bijna zijn we weer op aarde. Pak je paraplu maar vast, dan kan je zo lekker eten in het sushi restaurant naast de land plaats. Zoek maar alvast wat lekkers uit.';
  } else if (weather.includes('clear')) {
    document.getElementById('landing').innerHTML = 'Het is heel mooi weer om te landen. Bijna zijn we weer op aarde. Dat is een goede reden om jezelf te verwennen met wat sushi. Zoek maar alvast wat lekkers uit.';
  } else if (weather.includes('clouds')) {
    document.getElementById('landing').innerHTML = 'Het is heel mooi weer om te landen. Bijna zijn we weer op aarde. Dat is een goede reden om jezelf te verwennen met wat sushi. Zoek maar alvast wat lekkers uit.';
  } else {
      document.getElementById('landing').innerHTML = 'We zijn bijna weer op aarde, spannend!! Dat is een goede reden om jezelf te verwennen met wat sushi. Zoek maar alvast wat lekkers uit. ';
    }
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
