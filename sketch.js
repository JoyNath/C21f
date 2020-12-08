var mr,fr;
var o1,o2;
function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 50, 50);
  fr.shapeColor="red";
  mr=createSprite(400, 200, 80, 30);
  mr.shapeColor="red";
  o1=createSprite(400, 100, 50, 50);
  o1.velocityY=5;
  o2=createSprite(400, 250, 100, 30);
  o2.velocityY=-5;

}

function draw() {
  background(255,255,255); 
mr.x=World.mouseX;
mr.y=World.mouseY;
bounceoff(o1,o2)
Istouching(mr,fr)      
console.log(mr.x-fr.x)

  drawSprites();
}
