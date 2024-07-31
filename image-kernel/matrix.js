class Matrix {
  constructor(data) {
    this.data = data;
    this.rows = data.length;
    this.cols = data[0].length;
  }

  mult(num) {
    let result = [];
    for (let j = 0; j < this.rows; j++) {
      result[j] = []
      for (let i = 0; i < this.cols; i++) {
        result[j][i] = this.data[j][i] * num;
      }
    }
    return new Matrix(result);
  }

  hadamardProduct(that) {
    if (this.rows != that.rows || this.cols != that.cols) {
      console.log("Matrices A and B muse be exactly the same size");
      return null;
    }
    let result = [];
    for (let j = 0; j < this.rows; j++) {
      result[j] = [];
      for (let i = 0; i < this.cols; i++) {
        result[j][i] = this.data[j][i] * that.data[j][i];
      }
    }
    return new Matrix(result);
  }
}

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
