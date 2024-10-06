document
  .getElementById("newCanvasBtn")
  .addEventListener("click", createNewCanvas);
document
  .getElementById("clearCanvasBtn")
  .addEventListener("click", clearCanvas);

function createNewCanvas() {
  // Get the selected canvas size
  var selectedSize = document.getElementById("canvasSize").value;

  // Get the canvas element
  var canvas = document.getElementById("drawingCanvas");

  // Set canvas dimensions based on the selected size
  switch (selectedSize) {
    case "A2":
      canvas.width = 420;
      canvas.height = 594;
      break;
    case "A3":
      canvas.width = 297;
      canvas.height = 420;
      break;
    case "A4":
      canvas.width = 210;
      canvas.height = 297;
      break;
    case "4K":
      canvas.width = 3840;
      canvas.height = 2160;
      break;
    case "2K":
      canvas.width = 2560;
      canvas.height = 1440;
      break;
    case "FHD":
      canvas.width = 1920;
      canvas.height = 1080;
      break;
    case "HD":
      canvas.width = 1280;
      canvas.height = 720;
      break;
    // Add more sizes as needed
  }

  // Clear the canvas
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Clear the shapes array
  shapes = [];
  selectedShape = -1;
  updateLayers();
}

function clearCanvas() {
  // Get the canvas element and its context
  var canvas = document.getElementById("drawingCanvas");
  var ctx = canvas.getContext("2d");

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Clear the shapes array
  shapes = [];
  updateLayers();
}
