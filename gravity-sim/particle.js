class Particle {
  constructor(pos, vel, mass) {
    this.pos = pos;
    this.vel = vel;
    this.mass = mass;
  }
  show() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
  }
  update() {
    this.pos.add(this.vel);

    //edge collsion
    if (this.pos.x < this.mass/2) {this.vel.x *= -1;}
    if (this.pos.x > width - this.mass/2) {this.vel.x *= -1;}
    if (this.pos.y < this.mass/2) {this.vel.y *= -1;}
    if (this.pos.y > height - this.mass/2) {this.vel.y *= -1;}

    if (this.vel.x*this.vel.x + this.vel.y*this.vel.y > 100) {
      setup();
    }

  }
  gravity(obj) {
    for (let k = 0; k < accuracy; k++) {
      let F = (G * this.mass * obj.mass) / pow(dist(this.pos.x, this.pos.y, obj.pos.x, obj.pos.y), 2);
      let angle = atan2(obj.pos.y - this.pos.y, obj.pos.x - this.pos.x);
      let force = createVector(cos(angle) * F, sin(angle) * F);
      let acc = createVector(force.x / this.mass, force.y / this.mass).div(accuracy);
      if (F == Infinity) {acc = createVector(0, 0);}
      this.vel.add(acc.mult(grav));
    }
  }
  collision(obj) {
    let distance = dist(this.pos.x, this.pos.y, obj.pos.x, obj.pos.y);
    if (distance < (this.mass + obj.mass) / 2 && distance != 0) {
      console.log("Collision Detected");
      //noLoop();
      setup();
    }
  }
}
