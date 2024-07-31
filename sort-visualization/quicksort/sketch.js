let num = 512;

let values = [];
let states = [];

function setup() {
  createCanvas(800, 400);
  values = new Array(num);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
  }
  
  quickSort(values, 0, values.length - 1);
}

function draw() {
  resetMatrix();
  translate(0, height);
  background(0);

  for (let i = 0; i < values.length; i++) {

    if (states[i] == 0) {
      noFill();
      stroke(255, 0, 0);
      rectMode(CENTER);
      rect(i / num * width, -values[i], 20, 20);
    }
    stroke(255);
    point(i / num * width, -values[i]);
  }
}

