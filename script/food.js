function getFoodAPIdata() {

  var apiKey ="0343ff29ebb6f17b67d751e057f36065";

  // construct request
  var request = 'https://www.food2fork.com/api/search?key='+ apiKey +'&q=sushi';

  // get current weather
  fetch(request)

  // parse to JSON format
  .then(function(response) {
    return response.json();
  })

  // render weather per day
  .then(function(response) {

    showRecipe(response);

  })

  // catch error
  .catch(function (error) {
    onAPIError(error);
  });
}

function showRecipe(response) {

  for (var i = 0; i < 5; i++) {
    
    console.log(response.recipes[i]);

    document.getElementById('recipe').innerHTML += 
        '<strong>'+ response.recipes[i].title +'</strong> <br>' 
        + '<a href="'+ response.recipes[i].source_url +'">'
        + '<img src="'+ response.recipes[i].image_url + '" class="image"></a><br>'
    ;

  }

  //console.log(response.recipes[7].image_url);
  //console.log(response.recipes[7].title);
  // document.getElementById('recipe').innerHTML = response.recipe[7];
  // var recipe = response.recipe[7];
}


function onAPIError(error) {
  console.error('Request failed', error);
  var weatherBox = document.getElementById('temperature');
  weatherBox.className = 'hidden';
}

// init data stream
getFoodAPIdata();
