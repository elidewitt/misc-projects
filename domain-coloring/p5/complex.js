let e = Math.E;
class Complex {
  constructor(re, im) {
    this.re = re;
    this.im = im;
  }
  add(that) {
    let re = this.re + that.re;
    let im = this.im + that.im;
    return new Complex(re, im);
  }
  sub(that) {
    let re = this.re - that.re;
    let im = this.im - that.im;
    return new Complex(re, im);
  }
  mult(that) {
    let re = this.re * that.re - this.im * that.im;
    let im = this.re * that.im + that.re * this.im;
    return new Complex(re, im);
  }
  div(that) {
    let re = (this.re * that.re + this.im * that.im)/(that.re * that.re + that.im * that.im);
    let im = (that.re * this.im - this.re * that.im)/(that.re * that.re + that.im * that.im);
    return new Complex(re, im);
  }
  pow(that) {
    // Derivation by BlackPenRedPed (https://youtu.be/Z4PsLt9_ky8)
    let r = sqrt(pow(this.re, 2) + pow(this.im, 2));
    let arg = atan2(this.im, this.re);
    let re = pow(r, that.re) * pow(e, -that.im*arg) * cos(that.re * arg + that.im * log(r));
    let im = pow(r, that.re) * pow(e, -that.im*arg) * sin(that.re * arg + that.im * log(r));
    return new Complex(re, im);
  }
  mag() {
    return (sqrt(this.re * this.re + this.im * this.im)); 
  }
}