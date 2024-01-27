function getSelectedShape(mouseX, mouseY) {
  for (var i = 0; i < shapes.length; i++) {
    var shape = shapes[i];

    switch (shape.type) {
      case "circle":
        var distanceToCircle = Math.sqrt(
          Math.pow(mouseX - shape.x, 2) + Math.pow(mouseY - shape.y, 2)
        );
        if (distanceToCircle <= shape.radius) {
          return i;
        }
        break;

      case "rectangle":
        // Check if the mouse coordinates are within the rectangle's bounds
        if (
          mouseX >= shape.x &&
          mouseX <= shape.x + shape.width &&
          mouseY >= shape.y &&
          mouseY <= shape.y + shape.height
        ) {
          return i;
        }
        break;

      case "triangle":
        // Check if the mouse coordinates are inside the triangle using barycentric coordinates
        // (Assuming the triangle is defined by its three vertices: (x, y - height / 2), (x + sideLength / 2, y + height / 2), (x - sideLength / 2, y + height / 2))
        var side1 = shape.y + shape.height / 2 - (shape.y - shape.height / 2);
        var side2 = shape.x - shape.sideLength / 2 - shape.x;
        var side3 = shape.x + shape.sideLength / 2 - shape.x;

        var detT = side1 * side3 - side2 * (shape.y + shape.height / 2);
        var alpha =
          ((mouseY - (shape.y - shape.height / 2)) * side3 -
            side2 * (mouseX - shape.x)) /
          detT;
        var beta =
          (side1 * (mouseX - shape.x + shape.sideLength / 2) -
            (mouseY - (shape.y - shape.height / 2)) * side2) /
          detT;

        if (alpha >= 0 && beta >= 0 && alpha + beta <= 1) {
          return i;
        }
        break;

      case "ellipse":
        // Check if the mouse coordinates are inside the ellipse
        var normalizedX = (mouseX - shape.x) / shape.radiusX;
        var normalizedY = (mouseY - shape.y) / shape.radiusY;
        if (Math.pow(normalizedX, 2) + Math.pow(normalizedY, 2) <= 1) {
          return i;
        }
        break;

      // Add cases for other shape types as needed

      default:
        console.error("Invalid shape type");
        break;
    }
  }

  return -1;
}

function showCircleData() {
  if (selectedShape !== -1 && shapes[selectedShape].type === "circle") {
    // show selected circle stored data
    let selectedCircleRadius = shapes[selectedShape].diameter;
    document.getElementById("circleRadius").value = selectedCircleRadius;
    let selectedCircleLineWidth = shapes[selectedShape].lineWidth;
    document.getElementById("lineWidth").value = selectedCircleLineWidth;
    let selectedCircleLineColor = shapes[selectedShape].color;
    document.getElementById("lineColor").value = selectedCircleLineColor;
  }
}

function showRectData() {
  if (selectedShape !== -1 && shapes[selectedShape].type === "rectangle") {
    //show selected rect stored data
    let selectedWidthRect = shapes[selectedShape].width;
    document.getElementById("widthRect").value = selectedWidthRect;
    let selectedHeightRect = shapes[selectedShape].height;
    document.getElementById("heightRect").value = selectedHeightRect;
    let selectedLineWidthRect = shapes[selectedShape].lineWidth;
    document.getElementById("lineWidthRect").value = selectedLineWidthRect;
    let selectedLineColorRect = shapes[selectedShape].color;
    document.getElementById("lineColorRect").value = selectedLineColorRect;
  }
}

function showTriData() {
  if (selectedShape !== -1 && shapes[selectedShape].type === "triangle") {
    //show selected tri stored data
    let selectedSideLength = shapes[selectedShape].sideLength;
    document.getElementById("sideLength").value = selectedSideLength;
    let selectedHeightTri = shapes[selectedShape].height;
    document.getElementById("heightTri").value = selectedHeightTri;
    let selectedLineWidthTri = shapes[selectedShape].lineWidth;
    document.getElementById("lineWidthTri").value = selectedLineWidthTri;
    let selectedLineColorTri = shapes[selectedShape].color;
    document.getElementById("lineColorTri").value = selectedLineColorTri;
  }
}

function showElData() {
  if (selectedShape !== -1 && shapes[selectedShape].type === "ellipse") {
    //show selected ellipse stored data
    let selectedElRadiusX = shapes[selectedShape].radiusX;
    document.getElementById("widthEllipse").value = selectedElRadiusX;
    let selectedElRadiusY = shapes[selectedShape].radiusY;
    document.getElementById("heightEllipse").value = selectedElRadiusY;
    let selectedElLineWidth = shapes[selectedShape].lineWidth;
    document.getElementById("lineWidthEl").value = selectedElLineWidth;
    let selectedElLineColor = shapes[selectedShape].color;
    document.getElementById("lineColorEl").value = selectedElLineColor;
  }
}

function highlightSelectedShape() {
  // Get the canvas element and its context
  var canvas = document.getElementById("drawingCanvas");
  var ctx = canvas.getContext("2d");

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Redraw all shapes in their updated positions
  for (var i = 0; i < shapes.length; i++) {
    var shape = shapes[i];
    switch (shape.type) {
      case "circle":
        logicCircle(ctx, shape);
        break;
      case "rectangle":
        logicRect(ctx, shape);
        break;
      case "triangle":
        logicTri(ctx, shape);
        break;
      case "ellipse":
        logicEl(ctx, shape);
        break;
      default:
        console.error("Invalid shape type");
        break;
    }

    // Highlight the selected shape
    if (i === selectedShape) {
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#FF0000";
      ctx.stroke();
    }
  }
}
