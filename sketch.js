function setup() {
  createCanvas(800,400);
 MOVING= createSprite(400, 200, 50, 50);
 FIXED=createSprite(200,100,80,80)
 check=createSprite(200,200,20,20);
 check2=createSprite(100,200,50,50);
 check2.velocityX=5;
}

function draw() {
  background("yellow");  
  MOVING.x=mouseX;
  MOVING.y=mouseY;

  if(collision(MOVING,FIXED)){
    FIXED.shapeColor="black"
    MOVING.shapeColor="black"
  }else{
    FIXED.shapeColor="red"
    MOVING.shapeColor="red"
  }

  if(collision(check,check2)){

    check.visible=false;
    check2.visible=false;
  }
  else{
    check.visible=true;
    check2.visible=true;
  }
  drawSprites();
}

function collision(object1,object2){

  if(abs(object1.x-object2.x) <= object1.width/2+object2.width/2 && 
  abs(object1.y-object2.y) <=object1.height/2+object2.height/2){
    return true
  }else{
   return false

  }
}