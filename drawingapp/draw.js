document.getElementById("drawShapeBtn").addEventListener("click", drawShapes);

function drawShapes() {
  var shapeCount = document.getElementById("shapeCount").value;
  var shapeType = document.getElementById("shapeType").value;

  var canvas = document.getElementById("drawingCanvas");
  var ctx = canvas.getContext("2d");

  var existingShapeCount = shapes.length;

  for (var i = 0; i < shapeCount; i++) {
    var shapeNumber = existingShapeCount + i + 1;

    switch (shapeType) {
      case "circle":
        let diameter = currentStyle.circleRadius * 2;
        shapes.push({
          name: "Circle " + shapeNumber,
          type: shapeType,
          x: 50,
          y: (existingShapeCount + i + 1) * 50,
          color: currentStyle.lineColor,
          lineWidth: currentStyle.lineWidth,
          radius: currentStyle.circleRadius,
          diameter: diameter,
        });
        break;

      case "rectangle":
        shapes.push({
          name: "Rectangle " + shapeNumber,
          type: "rectangle",
          x: 30,
          y: (existingShapeCount + i + 1) * 50,
          color: currentStyle.lineColor,
          lineWidth: currentStyle.lineWidth,
          width: currentStyle.widthRect,
          height: currentStyle.heightRect,
        });
        break;

      case "triangle":
        var sideLength = currentStyle.sideLength;
        var height = (Math.sqrt(3) / 2) * sideLength;
        var centerX = 50;

        shapes.push({
          name: "Triangle " + shapeNumber,
          type: "triangle",
          x: centerX,
          y: (existingShapeCount + i + 1) * 50,
          color: currentStyle.lineColor,
          lineWidth: currentStyle.lineWidth,
          sideLength: sideLength,
          height: height,
        });
        break;

      case "ellipse":
        var radiusX = currentStyle.elRadiusX;
        var radiusY = currentStyle.elRadiusY;

        shapes.push({
          name: "Ellipse " + shapeNumber,
          type: "ellipse",
          x: 50,
          y: (existingShapeCount + i + 1) * 50,
          color: currentStyle.lineColor,
          lineWidth: currentStyle.lineWidth,
          radiusX: radiusX,
          radiusY: radiusY,
        });
        break;

      default:
        console.error("Invalid shape type selected");
        break;
    }
  }

  // Draw all shapes after adding new shapes
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
  }

  // Update layers after drawing all shapes
  updateLayers();
}
