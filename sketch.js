var car,wall;
var speed,weight



function setup() {
  createCanvas(1600,400);
  speed=random(50,90) 
 weight=random(400,1500)
 car=createSprite(50,200,50,50)
 wall= createSprite (1100,200,60,300);

car.velocityX=speed;  
 
}

function draw() {
  background("black"); 
var deformation=0.5*weight*speed*speed/22500;


if(deformation<100){
  wall.shapeColor="green";
}
if(deformation>100 && deformation<180){
  wall.shapeColor="yellow";
}


if(deformation>180){
  wall.shapeColor="red";
}

if(deformation>100 && deformation<180){
wall.shapeColor="yellow";
}


if(deformation>180){
  wall.shapeColor="red";
}

  drawSprites();

}
















