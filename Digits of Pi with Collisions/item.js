/*
Author: Eli DeWitt, adpoted from Daniel Shiffman
Date: March 2019
*/

class Item {
  constructor(position, velocity, mass) {
    this.position = position;
    this.velocity = velocity / accuracy;
    this.mass = mass;
    this.length = this.mass < 100 ? 100 : 200;
  }
  wallCollide() {
    if (this.position < 0) {
      this.velocity *= -1;
      collisions ++;
    }
  }
  collide(other) {
    //if(this.position + this.length/2 > other.position - other.length/2 || this.position - this.length/2 < other.position + other.length/2) {
    return !(this.position + this.length < other.position || this.position > other.position + other.length);
  }
  bounce(other) {
    let sumM = (this.mass + other.mass);
    let newV = ((this.mass - other.mass) / sumM * this.velocity) + (2 * other.mass) / sumM * other.velocity;
    collisions += 0.5;
    return newV;
  }
  update() {
    this.position += this.velocity;
  }
  show() {
    fill(255);
    rect(this.position, -this.length, this.length, this.length);

    fill(0)
    textSize(20)
    textAlign(CENTER, CENTER)
    text(this.mass, this.position+this.length/2, -this.length/2)
  }
}