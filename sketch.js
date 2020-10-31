var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = color(225);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

}

function draw() {
  background(255,255,255);

  bullet.velocityX = speed;

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge) {
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
    if(damage > 10)
    {
      wall.shapeColor = color(225, 0 ,0);
    }
    if(damage < 10)
    {
      wall.shapeColor = color(0, 255, 0);
    }
    bullet.velocityX = 0;
  }

  drawSprites();
}
