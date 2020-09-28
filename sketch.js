

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

}

function draw() {
  var r = Math.round (random(1,4))
  if (r==1) {
    drawRed();
  }
  if (r==2) {
    drawBlue();
  }
  if (r==3) {
    drawGreen();
  }
  if (r==4) {
    drawPink();
  }
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  drawSprites();
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}

function drawRed() {
  if (frameCount % 30==0) {
    var redBalloon = createSprite (20,20,20,20)
    redBalloon.addImage (red_balloonImage)
    redBalloon.scale = 0.1
    redBalloon.velocityX = 1
    redBalloon.y = Math.round(random(0,600))
  }
}

function drawBlue() {
  if (frameCount % 30==0) {
    var blueBalloon = createSprite (20,20,20,20)
    blueBalloon.addImage (blue_balloonImage)
    blueBalloon.scale = 0.1
    blueBalloon.velocityX = 1
    blueBalloon.y = Math.round(random(0,600))
  }
}

function drawGreen() {
  if (frameCount % 30==0) {
    var greenBalloon = createSprite (20,20,20,20)
    greenBalloon.addImage (green_balloonImage)
    greenBalloon.scale = 0.1
    greenBalloon.velocityX = 1
    greenBalloon.y = Math.round(random(0,600))
  }
}


function drawPink() {
  if (frameCount % 30==0) {
    var pinkBalloon = createSprite (20,20,20,20)
    pinkBalloon.addImage (pink_balloonImage)
    pinkBalloon.scale = 1.9
    pinkBalloon.velocityX = 1
    pinkBalloon.y = Math.round(random(0,600))
  }
}