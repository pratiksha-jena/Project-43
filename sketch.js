var sc,mn,hr;

function setup() {
  createCanvas(800,400);
 

 
  angleMode(DEGREES);
  
}

function draw() {
  background("black"); 

  sc = second();
  mn = minute();
  hr = hour();


  scAngle = map(sc,0,60,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}