let positionA;
let speedA;
let positionB;
let speedB;
let mappedValue;
function setup() {
  // put setup code here
  createCanvas(2200,2200);
  background(134,214,100);
  positionA = 50;
  positionB=50;
  speedA = 7;
  speedB = 5;
  noCursor();
  mappedValue = 0;
    background(255,153,7);
}

function draw() {
  // put drawing code here
  mappedValue = map(mouseY ,0 ,2200 ,100 ,200);
  noStroke();
  fill(mappedValue);
  ellipse(mouseX,mouseY,50,50);


  fill(51,102,255);
  noStroke();
  ellipse(positionA,positionB,50,50);
  positionA = positionA + speedA;
  positionB = positionB + speedB;
  if (positionA >= 2200 || positionA<=0 ){
    speedA=speedA*-1;
  }
  if (positionB >= 1100 || positionB<=0 ){
    speedB=speedB*-1;
  }


  fill(255);
  textSize(30);
  text('hello world', 300,100);

}
function keyPressed() {
 let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    background(255,153,7);
  }else{
    fill(random(255),random(255),random(255));
  rect(random(2200),random(2200),random(2200),random(2200));
}

}
