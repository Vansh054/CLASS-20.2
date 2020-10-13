
var car, wall;

function setup() {
  createCanvas(1600,400);
  weight = Math.random(1500,3000);
  speed = Math.random(55,56);

  car = createSprite(50, 150, 30, 30);
  wall = createSprite(400,150, 20, 150);
  
  
}

function draw() {
  background(255,255,255);

  car.velocityX = speed;
  
  if (car.x - wall.x < car.width/2 + wall.width/2 &&
    wall.x - car.x < car.width/2 + wall.width/2 &&
    car.y - wall.y < car.height/2 + wall.height/2 &&
    wall.x - car.x < car.height/2 + wall.height/2 )
    {
      car.velocityX = 0;
      var deformation = (0.5 * weight * speed * speed) /22500
      if(deformation < 80)
      {
        car.shapeColor = color(0,255,0)
      } else if(deformation >=  80 && deformation < 180)
      {
        car.shapeColor = color(230,230,0)
      } else if(deformation >= 180)
      {
        car.shapeColor = color(255,0,0)
      }
    }
  drawSprites();
}