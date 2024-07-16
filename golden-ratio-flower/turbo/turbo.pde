void setup() {
  fullScreen();
  colorMode(HSB, 360, 100, 100);
  background(0);
  translate(width/2, height/2);

  double limit = (Math.sqrt(2))*width/2; 
  double theta = 0;
  double radius = 1;
  double phi = (1 + Math.sqrt(5))/2;
  
  float r = width/300;
  
  noStroke();
  while (radius < limit) {
    
    fill((int)(120*radius/limit), 100, 100);
    ellipse((float)(Math.cos(theta)*radius), (float)(Math.sin(theta)*radius), r, r);
    
    theta += 2*Math.PI*phi;
    radius += 0.27*r*r/(radius+Math.sqrt(r));
  }
  print("Finished");
}
  
