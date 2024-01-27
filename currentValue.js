var isMouseDown = false;
var selectedShape = -1;
var shapes = [];
var currentStyle = {
  lineWidth: 1,
  lineColor: "#000000",
  circleRadius: 20,
  widthRect: 40,
  heightRect: 40,
  sideLength: 40,
  elRadiusX: 20,
  elRadiusY: 15,
};

// Assuming you have an input element with the ID "defaultLineColor"
var lineColorInput = document.getElementById("defaultLineColor");

// Assuming you have an input element with the ID "defaultLineWidth"
var lineWidthInput = document.getElementById("defaultLineWidth");

// Update current styles based on user input
currentStyle.lineWidth =
  parseFloat(lineWidthInput.value) || currentStyle.lineWidth;
currentStyle.lineColor = lineColorInput.value || currentStyle.lineColor;

// Event listener for the color input change
lineColorInput.addEventListener("input", function () {
  // Get the selected color from the input element with ID "defaultLineColor"
  var selectedColor = lineColorInput.value;

  // Update the currentStyle.lineColor with the selected color
  currentStyle.lineColor = selectedColor;

  // Now, you can log or perform any other actions with the updated color
  console.log("Updated line color:", currentStyle.lineColor);
});

// Event listener for the line width input change
lineWidthInput.addEventListener("input", function () {
  // Get the selected line width from the input element with ID "defaultLineWidth"
  var selectedLineWidth =
    parseFloat(lineWidthInput.value) || currentStyle.lineWidth;

  // Update the currentStyle.lineWidth with the selected line width
  currentStyle.lineWidth = selectedLineWidth;

  // Now, you can log or perform any other actions with the updated line width
  console.log("Updated line width:", currentStyle.lineWidth);
});

// Rest of your existing code...

// Additional code if needed for other functionalities

// End of your existing code...
