double limit, theta, radius, phi;
float r;

void setup() {
  frameRate(10);
  fullScreen();
  colorMode(HSB, 360, 100, 100);
  background(0);
  translate(width/2, height/2);

  limit = (Math.sqrt(2))*width/2; 
  theta = 0;
  radius = 1;
  phi = (1 + Math.sqrt(5))/2;
  
  r = width/40;
  
  noStroke();
}

void draw() {
  resetMatrix();
  translate(width/2, height/2);
  
  fill((int)(120*radius/limit), 100, 100);
  ellipse((float)(Math.cos(theta)*radius), (float)(Math.sin(theta)*radius), r, r);
    
  theta += 2*Math.PI*phi;
  radius += 0.27*r*r/(radius+Math.sqrt(r));
  
  if (radius>width/2){ 
    print("Finished");
    noLoop();
}
  
}
