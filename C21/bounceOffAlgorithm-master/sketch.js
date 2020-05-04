var o1, o2, o3, o4;

function setup() {
  createCanvas(1200,800);
  o1 = createSprite(400, 100, 50, 80);
  o1.shapeColor = "green";
  o2 = createSprite(400, 800,80,30);
  o2.shapeColor = "green";
  o3 = createSprite(700, 200,80,30);
  o3.shapeColor = "green";
  o4 = createSprite(500, 300, 80,30);
  o4.shapeColor = "green";
}

function draw() {
  background(0,0,0); 
  o1.y = World.mouseY;
  o1.x = World.mouseX;
  
  if (isTouching(o1, o2)){
    o1.shapeColor =  "blue"; 
    o2.shapeColor = "blue";
  } else {
    o2.shapeColor = "green";
   o1.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(object1, object2){
if (object1.y -  object2.y < object1.height/2 + object2.height/2 &&
  object2.y -  object1.y < object1.height/2 + object2.height/2 &&
  object1.x -  object2.x < object1.width/2 + object2.width/2 &&
  object2.x -  object1.x < object1.width/2 + object2.width/2 
  ){
  return true;
  } else {
  return false;
  }
}