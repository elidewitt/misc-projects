for (i in presets) {

  let target = document.getElementById("kernelSelection");

  let label = document.createElement("LABEL");
  label.innerHTML = i;
  target.appendChild(label);

  let ui = document.createElement("INPUT");
  ui.type = "checkbox";
  ui.id = i;
  target.appendChild(ui);

  target.appendChild(document.createElement("BR"));
}


let imgInput = document.getElementById('imageInput');
imgInput.addEventListener('change', function(e) {
  if (e.target.files) {
    let imageFile = e.target.files[0]; //here we get the image file
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function (e) {
      let myImage = new Image(); // Creates image object
      myImage.src = e.target.result; // Assigns converted image to image object
      myImage.onload = function(ev) {
        let showImage = document.body.appendChild(myImage);
        // createTransformation(myImage, presets[document.getElementById("kernel").value]);
        // createTransformation(myImage, presets["edgeDetection"]);
        // createTransformation(myImage, presets["sharpen"]);

        for (i in presets) {
          if (document.getElementById(i).checked) {
            console.log("Began " + i + " kernel at " + new Date());
            createTransformation(myImage, presets[i]);
            console.log("Completed " + i + " kernel at " + new Date());
          }
        }
      }
    }
  }
});

function createTransformation(image, kernel) {
  let canvas = document.body.appendChild(document.createElement("CANVAS")); // Creates a canvas object
  let ctx = canvas.getContext("2d"); // Creates a context object

  canvas.width = image.width; // Assigns image's width to canvas
  canvas.height = image.height; // Assigns image's height to canvas

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height); // Draws the image on canvas
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  applyKernel(imgData.data, kernel, canvas.width, canvas.height);
  ctx.putImageData(imgData, 0, 0);
}
