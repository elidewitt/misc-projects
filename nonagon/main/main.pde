int n = 9;
float r = 0.429;
float r2 = 0.18;
float r3 = 0.12;
//float pt = 16;
float et = 14;
PVector[] points;
//float mini = 0.5;
float s = 1.1;


void li(int n, int m) { line(points[n].x, points[n].y, points[m].x, points[m].y); }
void sli(int n, int m) { line(s*points[n].x, s*points[n].y, s*points[m].x, s*points[m].y); }

void non(float t) {
  beginShape();
  
  fill(0);
  noStroke();
  
  for (int i = 0; i < n; i++) {
    vertex(t*points[i].x, t*points[i].y);
  }
  
  endShape();
}

void small() {
  sli(0, 1); li(1, 8); sli(8, 0);
  sli(3, 4); li(4, 2); sli(2, 3);
  sli(6, 7); li(7, 5); sli(5, 6);
}

void tall() {
  li(0, 4); sli(4, 5); li(5, 0);
  li(3, 7); sli(7, 8); li(8, 3);
  li(6, 1); sli(1, 2); li(2, 6);
}

void half() {
  li(0, 2); li(2, 7); li(7, 0);
  li(3, 5); li(5, 1); li(1, 3);
  li(6, 8); li(8, 4); li(4, 6);
}

void equa() {
  li(0, 3); li(3, 6); li(6, 0);
  li(1, 4);li(4, 7);li(7, 1);
  li(2, 5); li(5, 8); li(8, 2);
}


void performSketch(color c1, color c2, color c3, color c4) {
  strokeWeight(et*width/1000);
  
  stroke(c1);
  small();
  
  stroke(c2);
  half();
  
  stroke(c3);
  tall();
  
  stroke(c4);
  equa();
 
}

void setup() {
  size(800, 800);
  background(0);
  
  translate(width/2, height/2);
  rotate(-PI/2);
  
  
  color red = color(200, 38, 5);
  color green = color(0, 136, 42);
  color blue = color(3, 101, 192);
  color yellow = color(220, 189, 35);
 
  
  points = new PVector[n];
  for (int i = 0; i < n; i++) { points[i] = new PVector(r*width*cos(2*PI*i/n), -r*height*sin(2*PI*i/n)); }
  
  performSketch(red, green, blue, yellow);
  non(0.5188);
  
  for (int i = 0; i < n; i++) { points[i] = new PVector(r2*width*cos(2*PI*i/n), r2*height*sin(2*PI*i/n)); }
  
  
  
  //stroke(blue);  
  //li(0, 1);
  //li(2, 3);
  //li(3, 4);
  //li(5, 6);
  //li(6, 7);
  //li(8, 0);
  
  //stroke(green);
  //li(1,2);
  //li(4,5);
  //li(7,8);
  
  //n = 6;
  
  //for (int i = 0; i < n; i++) { points[i] = new PVector(r3*width*cos(2*PI*i/n) * (((i + 1) % 2) + 1)/2, r3*height*sin(2*PI*i/n) * (((i + 1) % 2) + 1)/2); }
  
  
  
  ////stroke(yellow);
  ////li(1,3);
  ////li(3,5);
  ////li(5,1);
  
  //stroke(blue);
  //li(0,3);
  //li(1,4);
  //li(2,5);
  
  //stroke(green);
  ////li(0,1);
  ////li(1,2);
  ////li(2,3);
  ////li(3,4);
  ////li(4,5);
  ////li(5,0);
  
  
  //fill(0);
  ////noFill();
  //ellipse(0, 0, r3*width, r3*height);
  
  
  //stroke(yellow);
  //li(0,2);
  //li(2,4);
  //li(4,0);
  
  
  //performSketch(blue, red, green, yellow);
  //non(0.5188);
  
  //save("nonagon.png");
}
