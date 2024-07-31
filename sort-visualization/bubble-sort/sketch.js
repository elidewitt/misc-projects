let num = 128;

let values = [];
let states = [];

function setup() {
  createCanvas(800, 400);
  values = new Array(num);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
  }
  
  bubbleSort(values);
}

function draw() {
  resetMatrix();
  translate(0, height);
  background(0);

  for (let i = 0; i < values.length; i++) {

    stroke(255);
    point(i / num * width, -values[i]);
  }
}

