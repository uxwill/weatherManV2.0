//Collisions 
//Collision between groups
//function called upon collision

var obstacles;
var collectibles;
var asterisk, cloud, weatherName;


function setup() {
  createCanvas(400,400);  


  // input = createInput();
  // input.position(20, 65);

  // button = createButton('submit');
  // button.position(150, 65);
  // button.mousePressed(greet);

  // greeting = createElement('h2', 'enter a city');
  // greeting.position(20, 5);

  // textAlign(CENTER)
  // textSize(50);
  
  weatherName = createElement('h2', 'its raining');
  weatherName.position(200, 200);

  textAlign(CENTER)
  textSize(50);

  cloud = createSprite(100,20);
  cloud.addAnimation("normal","assets/cloud/cloud1.png","assets/cloud/cloud2.png");
  cloud.velocity.x = 3;
  
  //create a user controlled sprite
  asterisk = createSprite(200, 300);
  asterisk.addAnimation("normal", "assets/rainMan/RainMan_0008_Frame-1.png","assets/rainMan/RainMan_0001_Frame-8.png");
  
  asterisk.addAnimation("rainedOn", "assets/rainedOn/RainedOn_0000_rainedOn.png","assets/rainedOn/RainedOn_0001_rainedOn2.png");
  
  //create 2 groups
  frameRate(10);


  // obstacles = new Group();

  obstacles = new Group();

  for(var i=0; i<40; i++)
    {
    var box = createSprite(random(0, width),random( 0, height));
    box.addAnimation("normal", "assets/rain/rain_0000_Frame1.png","assets/rain/rain_0001_Frame2.png");
    box.velocity.y = 1;
    obstacles.add(box);
    } 
  
  
}



function draw() {
  background(255,255,255); 

if (cloud.position.x >300){
  cloud.position.x = 100;
}

// if (obstacles.position.y > height){
//   obstacles.position.y = 0
// }

  drawSprites();

  // console.log(box.position);

  // if (asterisk.position == box.position){
  //   console.log("gotit");
  // }
  
  //if no arrow input set velocity to 0
  asterisk.position.x = mouseX;

  
  //I can define a function to be called upon collision, overlap, displace or bounce
  //see collect() below
  asterisk.overlap(obstacles, collect);
  
  //if the animation is "stretch" and it reached its last frame
  if(asterisk.getAnimationLabel() == "rainedOn" && asterisk.animation.getFrame() == asterisk.animation.getLastFrame())
  {
    asterisk.changeAnimation("normal");
  }


  
  
}

//the first parameter will be the sprite (individual or from a group) 
//calling the function
//the second parameter will be the sprite (individual or from a group)
//against which the overlap, collide, bounce, or displace is checked
function collect(collector, collected)
{
  //collector is another name for asterisk
  //show the animation
  collector.changeAnimation("rainedOn");
  collector.animation.rewind();
  //collected is the sprite in the group collectibles that triggered 
  //the event
  collected.remove();
}

// function greet() {
//   var name = input.value();
//   greeting.html('CITY: '+name);
//   input.value('');

//   var jsonFirst = "http://api.openweathermap.org/data/2.5/weather?q=";
//   var jsonSecond = "&units=metric"
//   var url = jsonFirst.concat(name, jsonSecond);

//   loadJSON(url, gotWeather);

//   console.log(url);
  
//       }


// function gotWeather(weather){ 
//   var weather =  weather.weather; for(var i = 0; i < weather.length; i++){ var
//       weatherID = weather[i].id; // The actual weather ID var
//       weatherDescription = weather[i].description; // Description
//       console.log(weatherID); console.log(weatherDescription); }
//       // console.log(weather);
      
//       }




