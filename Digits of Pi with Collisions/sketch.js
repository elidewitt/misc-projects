/*
Author: Eli DeWitt, adpoted from Daniel Shiffman
Date: March 2019
*/

let items = [];
let digits = 4;
let amount = 2;
let collisions = 0;
let accuracy = 1;
let groundLevel;
function setup() {
  createCanvas(600, 400);
  groundLevel = height*2/3;
  accuracy = 100;
  items[0] = new Item(width/2, -2, pow(100, digits-1));
  items[1] = new Item(width/8, 0, 1);
}

function draw() {
  frameRate(Infinity)
  resetMatrix();
  translate(0, groundLevel);
  background(220);
  line(0, 0, width, 0);
  
  //for loop for accuracy
  for (let i = 0; i < accuracy; i++) {
    if (items[0].collide(items[1])) {
      let v1 = items[0].bounce(items[1]);
      let v2 = items[1].bounce(items[0]);
      items[0].velocity = v1;
      items[1].velocity = v2;
    }
    for (let j = 0; j < amount; j++) {
      items[j].show();
      items[j].wallCollide();
      items[j].update();
    }
    fill(0);
    text(collisions, width/2, height/4);
  }
}