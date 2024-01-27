function startMove(event) {
  isMouseDown = true;

  // Check if the mouse click is inside any shape
  var mouseX = event.clientX - event.target.getBoundingClientRect().left;
  var mouseY = event.clientY - event.target.getBoundingClientRect().top;

  // Detect the index of the selected shape
  selectedShape = getSelectedShape(mouseX, mouseY);

  // Highlight the selected shape and its layer
  highlightSelectedLayer();
  highlightSelectedShape();

  showCircleData();
  showRectData();
  showTriData();
  showElData();
}

function stopMove() {
  isMouseDown = false;
}

function moveShape(event) {
  if (isMouseDown && selectedShape !== -1) {
    // Get the canvas element and its context
    var canvas = document.getElementById("drawingCanvas");
    var ctx = canvas.getContext("2d");

    // Update the position of the selected shape
    shapes[selectedShape].x =
      event.clientX - event.target.getBoundingClientRect().left;
    shapes[selectedShape].y =
      event.clientY - event.target.getBoundingClientRect().top;

    // Update selectedShape during the movement
    selectedShape = getSelectedShape(
      shapes[selectedShape].x,
      shapes[selectedShape].y
    );

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw all shapes in their updated positions
    for (var i = 0; i < shapes.length; i++) {
      var shape = shapes[i];
      ctx.beginPath();
      ctx.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
      ctx.lineWidth = shape.lineWidth;
      ctx.strokeStyle = shape.color;
      ctx.stroke();
    }
    highlightSelectedShape();
  }
}
