
var wall,thickness;

var bullet,speed,weight;

var damage;
function setup() {
  createCanvas(1600,400);
 
  bullet=createSprite(400, 200, 80, 50);
  wall=createSprite(1300,200,thickness,height/2);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  bullet.collide(wall);
  wall.shapeColor=color(80,80,80);
    

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;

 var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){
wall.shapeColor="green";
}
if(damage<10){
 wall.shapeColor="red";
}
}
  }

function hasCollided(bullet,wall){

  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}












