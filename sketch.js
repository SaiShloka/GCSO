var deformation;
var car;
var wall;
var speed,weight;
function setup() {  
  createCanvas(1600,400);
  
  speed=random(55,90)
  weight=random(400,1500)
  car = createSprite(50,200,50,50)
  car.shapeColor="white"
  car.velocityX= speed;
  wall = createSprite(1500,200,60,height/2)
  wall.setCollider("rectangle",70,0,200,height/2)
  wall.debug=false
  deformation=0.5*speed*speed*weight/22500;
  console.log(deformation)
}

function draw() {
  background("black");  
  
  if(car.collide(wall)){
  car.velocityX=0;
  
  if(deformation<100){
    car.shapeColor="green"
     }else if(deformation>=100 && deformation<=180){
     car.shapeColor="yellow"
     }else if(deformation>180){
     car.shapeColor="red"
     }
  }
  

  
  drawSprites();
 
}