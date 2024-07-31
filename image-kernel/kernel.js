let presets  = {
  // boxBlur: function(blurryness) {
  //
  //   let result = [];
  //   let size = 2 * blurryness + 1
  //   for (let j = 0; j < size; j++) {
  //     result[j] = [];
  //     for (let i = 0; i < size; i++) {
  //       result[j][i] = 1/(size * size)
  //     }
  //   }
  //   return new Matrix(result);
  // },
  boxBlur: new Matrix([
    [1/9, 1/9, 1/9],
    [1/9, 1/9, 1/9],
    [1/9, 1/9, 1/9]
  ]),

  gaussianBlur: new Matrix([
    [1/16, 1/8, 1/16],
    [1/8, 1/4, 1/8],
    [1/16, 1/8, 1/16]
  ]),

  edgeDetection: new Matrix([
    [0, -1, 0],
    [-1, 4, -1],
    [0, -1, 0]
  ]),

  intensifiedEdgeDetection: new Matrix([
    [-1, -1, -1],
    [-1, 8, -1],
    [-1, -1, -1]
  ]),

  sharpen: new Matrix([
    [0, -1, 0],
    [-1, 5, -1],
    [0, -1, 0]
  ]),

  intensifiedSharpen: new Matrix([
    [-1, -1, -1],
    [-1, 9, -1],
    [-1, -1, -1]
  ]),

  emboss: new Matrix([
    [-2, -1, 0],
    [-1, 1, 1],
    [0, 1, 2]
  ]),

  topSobel: new Matrix([
    [1, 2, 1],
    [0, 0, 0],
    [-1, -2, -1]
  ]),

  bottomSobel: new Matrix([
    [-1, -2, -1],
    [0, 0, 0],
    [1, 2, 1]
  ]),

  leftSobel: new Matrix([
    [1, 0, -1],
    [2, 0, -2],
    [1, 0, -1]
  ]),

  rightSobel: new Matrix([
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1]
  ])
}

function transform(target, kernel, targetWidth, targetHeight) {

  let resultMatrix = [];
  for (let j = 0; j < target.length; j++) {
    resultMatrix[j] = [];
    for (let i = 0; i < target[0].length; i++) {
      resultMatrix[j][i] = 0;
    }
  }

  let kernelSize = new Vector((kernel.data[0].length - 1) / 2, (kernel.data.length - 1) / 2);
  for (let j = kernelSize.y; j < targetHeight - kernelSize.y; j++) {
    for (let i = kernelSize.x; i < targetWidth - kernelSize.x; i++) {

      targetPortion = [];
      for (let y = 0; y <= 2 * kernelSize.y; y++) {

        targetPortion[y] = [];
        for (let x = 0; x <= 2 * kernelSize.x; x++) {

          targetPortion[y][x] = target[j + y - kernelSize.y][i + x - kernelSize.x];
        }
      }

      portionResult = new Matrix(targetPortion).hadamardProduct(kernel);
      pixelResult = 0;

      for (let y = 0; y <= 2 * kernelSize.y; y++) {
        for (let x = 0; x <= 2 * kernelSize.x; x++) {

          pixelResult += portionResult.data[y][x];
        }
      }
      resultMatrix[j][i] = pixelResult;
    }
  }
  return resultMatrix;
}

function applyKernel(inputImage, kernel, targetWidth, targetHeight) {

  let imageData = { r: [], g: [], b: [] }
  for (let j = 0; j < targetHeight; j++) {
    imageData.r[j] = [];
    imageData.g[j] = [];
    imageData.b[j] = [];
    for (let i = 0; i < targetWidth; i++) {
      imageData.r[j][i] = inputImage[4 * (i + j * targetWidth) + 0];
      imageData.g[j][i] = inputImage[4 * (i + j * targetWidth) + 1];
      imageData.b[j][i] = inputImage[4 * (i + j * targetWidth) + 2];
    }
  }

  let r = transform(imageData.r, kernel, targetWidth, targetHeight);
  let g = transform(imageData.g, kernel, targetWidth, targetHeight);
  let b = transform(imageData.b, kernel, targetWidth, targetHeight)

  for (let j = 0; j < targetHeight; j++) {
    for (let i = 0; i < targetWidth; i++) {
      inputImage[4 * (i + j * targetWidth) + 0] = r[j][i];
      inputImage[4 * (i + j * targetWidth) + 1] = g[j][i];
      inputImage[4 * (i + j * targetWidth) + 2] = b[j][i];
    }
  }
}
