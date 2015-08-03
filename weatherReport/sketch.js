var input, button, greeting;

function setup() {

  // loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Johannesburg&units=metric', gotWeather);

  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(150, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'enter a city');
  greeting.position(20, 5);

  textAlign(CENTER)
  textSize(50);
}

function greet() {
  var name = input.value();
  greeting.html('CITY: '+name);
  input.value('');

  var jsonFirst = "http://api.openweathermap.org/data/2.5/weather?q=";
  var jsonSecond = "&units=metric"
  var url = jsonFirst.concat(name, jsonSecond);

  loadJSON(url, gotWeather);

  console.log(url);
  
      }


function gotWeather(weather){ 
  var weather =  weather.weather; for(var i = 0; i < weather.length; i++){ var
      weatherID = weather[i].id; // The actual weather ID var
      weatherDescription = weather[i].description; // Description
      console.log(weatherID); console.log(weatherDescription); }
      // console.log(weather);
    
//redirect to thunderstorm
    if (weatherID > 200 && weatherID < 299) { 
   window.location.href = "/weather/02thunderstorm"
}

//redirect to rain
    if (weatherID > 300 && weatherID < 599) { 
   window.location.href = "/weather/03rain"
}

//redirect to snow
    if (weatherID > 600 && weatherID < 699) { 
   window.location.href = "/weather/04snow"
}

//redirect to mist
    if (weatherID > 700 && weatherID < 799) { 
   window.location.href = "/weather/05mist"
}

//redirect to sun
    if (weatherID == 800) { 
   window.location.href = "/weather/06sun"
}

//redirect to clouds
    if (weatherID > 800 && weatherID < 899) { 
   window.location.href = "/weather/07clouds"
}

}



