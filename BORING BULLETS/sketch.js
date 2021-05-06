  
var bullet, red, blue, green, yellow;

function setup() {
  createCanvas(1200,800);
  bullet = createSprite(0, 0, 35, 35);
  bullet.shapeColor = "orange";
  red = createSprite(100,500,200,10)
  red.shapeColor = "red";
  blue = createSprite(350,500,200,10)
  blue.shapeColor = "blue";
  green = createSprite(600,500,200,10)
  green.shapeColor = "green";
  yellow = createSprite(850,500,200,10)
  yellow.shapeColor = "yellow";
  
}

function draw() {
  background(0,0,0);  

  bullet.shapeColor = "orange";
  bullet.x = World.mouseX;
  bullet.y = World.mouseY;
  red.shapeColor = "red";

  blue.shapeColor = "blue";

  green.shapeColor = "green";

  yellow.shapeColor = "yellow";


  if (bullet.x - red.x < red.width/2 + bullet.width/2
      && red.x - bullet.x < red.width/2 + bullet.width/2
      && bullet.y - red.y < red.height/2 + bullet.height/2
      && red.y - bullet.y < red.height/2 + bullet.height/2) {
    bullet.shapeColor = "white";
    red.shapeColor = "white";
  }
  if (bullet.x - blue.x < blue.width/2 + bullet.width/2
    && blue.x - bullet.x < blue.width/2 + bullet.width/2
    && bullet.y - blue.y < blue.height/2 + bullet.height/2
    && blue.y - bullet.y < blue.height/2 + bullet.height/2) {
  bullet.shapeColor = "white";
  blue.shapeColor = "white";
}


if (bullet.x - green.x < green.width/2 + bullet.width/2
  && green.x - bullet.x < green.width/2 + bullet.width/2
  && bullet.y - green.y < green.height/2 + bullet.height/2
  && green.y - bullet.y < green.height/2 + bullet.height/2) {
bullet.shapeColor = "white";
green.shapeColor = "white";
  }

  if (bullet.x - yellow.x < yellow.width/2 + bullet.width/2
    && yellow.x - bullet.x < yellow.width/2 + bullet.width/2
    && bullet.y - yellow.y < yellow.height/2 + bullet.height/2
    && yellow.y - bullet.y < yellow.height/2 + bullet.height/2) {
  bullet.shapeColor = "white";
  yellow.shapeColor = "white";
    }







  drawSprites();
}