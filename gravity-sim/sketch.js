let accuracy = 2000;
let massLim;
let maxStartSpeed = 2;
let population = 3;
let particles = [];
let G;
let grav = 1500000000000;
function setup() {
  createCanvas(600, 600);
  massLim = createVector(4, 20);

  G = 6.67408 * pow(10, -11);
  for (let i = 0; i < population; i++) {
    particles[i] = new Particle(createVector(random(massLim.y, width - massLim.y), random(massLim.y, height - massLim.y)), createVector(random(-maxStartSpeed, maxStartSpeed), random(-maxStartSpeed, maxStartSpeed)), random(massLim.x, massLim.y));
  }
  // particles.push(new Particle(createVector(width/4, height/2),createVector(0,-1), 10));
  // particles.push(new Particle(createVector(3*width/4, height/2),createVector(0,0), 10));
  // particles.push(new Particle(createVector(2*width/4, height/2),createVector(1,0), 10));
}

function draw() {
  background(0);
  frameRate(Infinity);
  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].update();
    for (let j = 0; j < particles.length; j++) {
     particles[i].gravity(particles[j]);
    }
    for (let j = 0; j < particles.length; j++) {
      //particles[i].collision(particles[j]);
    }

  }

  noFill();
  stroke(0);
  strokeWeight(massLim.y/2);
}
