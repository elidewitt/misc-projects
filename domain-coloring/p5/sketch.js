let pos;
let xrange;
let yrange;
let n;

function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
  colorMode(HSL, 360);

  n=width
  plotmin = new Complex(-2.1, -2.1);
  plotmax = new Complex(3.1, 3.1);
  
  stepsize = plotmax.sub(plotmin).re/n

  translate(width / 2, height / 2);
  let hue = 360;
  let radius = 180;

  // perform calculations discretely and display the results on the canvas

  for (let im_in = plotmin.im; im_in <= plotmax.im; im_in += stepsize) {
    for (let re_in = plotmin.re; re_in <= plotmax.re; re_in += stepsize) {
      let input = new Complex(re_in, im_in);
      let output = f(input);
      hue = (atan2(output.im, output.re) + 480) % 360;
      radius = (output.mag());
      noStroke();
      fill(hue, 360, 380*l(radius));
      rect(
        map(re_in, plotmin.re, plotmax.re, -width/2, width/2),
        -map(im_in, plotmin.im, plotmax.im, -height/2, height/2), 
        width/n, width/n);
    }
  }

  // draw tick marks for axes and unit lengths

  stroke(0)
  strokeWeight(3)
  for (let xtick = floor(plotmin.re); xtick <= ceil(plotmax.re); xtick ++) {
    line(
      map(xtick, plotmin.re, plotmax.re, -width/2, width/2),
      -map(0, plotmin.im, plotmax.im, -height/2, height/2) + 5,
      map(xtick, plotmin.re, plotmax.re, -width/2, width/2),
      -map(0, plotmin.im, plotmax.im, -height/2, height/2) - 5
    )
  }

  for (let ytick = floor(plotmin.im); ytick <= ceil(plotmax.im); ytick ++) {
    line(
      map(0, plotmin.re, plotmax.re, -width/2, width/2) + 5,
      -map(ytick, plotmin.im, plotmax.im, -height/2, height/2),
      map(0, plotmin.re, plotmax.re, -width/2, width/2) - 5,
      -map(ytick, plotmin.im, plotmax.im, -height/2, height/2)
    )
  }
}

function l(r) {
  return pow(r,1)/(pow(r,1)+1)

  // Below are other determinging brightness. I picked the one I thought matched the wikipedia page best
  // return 0.5;
  // return 1-pow(0.9,r);
  // return (2/Pi)*atan(r);
}

function f(z) {
  return z.mult(z).add(new Complex(-1,0)).mult(z.add(new Complex(-2,-1)).pow(new Complex(2,0))).div(z.mult(z).add(new Complex(2,2)))
  // return z.mult(z)
}