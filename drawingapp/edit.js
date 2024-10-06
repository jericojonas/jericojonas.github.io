function circleEdit() {
  let diameter = document.getElementById("circleRadius");
  let lineWidth = document.getElementById("lineWidth");
  let lineColor = document.getElementById("lineColor");

  shapes[selectedShape].radius = diameter.value / 2;
  shapes[selectedShape].diameter = diameter.value;
  shapes[selectedShape].lineWidth = lineWidth.value;
  shapes[selectedShape].lineColor = lineColor.value;

  showCircleData();
}

function rectEdit() {
  let width = document.getElementById("widthRect");
  let height = document.getElementById("heightRect");
  let lineWidth = document.getElementById("lineWidthRect");
  let lineColor = document.getElementById("lineColorRect");

  shapes[selectedShape].width = width.value;
  shapes[selectedShape].height = height.value;
  shapes[selectedShape].lineWidth = lineWidth.value;
  shapes[selectedShape].lineColor = lineColor.value;

  showRectData();
}

function triEdit() {
  let sideLength = document.getElementById("sideLength");
  let height = document.getElementById("heightTri");
  let lineWidth = document.getElementById("lineWidthTri");
  let lineColor = document.getElementById("lineColorTri");

  shapes[selectedShape].sideLength = sideLength.value;
  shapes[selectedShape].height = height.value;
  shapes[selectedShape].lineWidth = lineWidth.value;
  shapes[selectedShape].lineColor = lineColor.value;

  showTriData();
}

function elEdit() {
  let radiusX = document.getElementById("widthEllipse");
  let radiusY = document.getElementById("heightEllipse");
  let lineWidth = document.getElementById("lineWidthEl");
  let lineColor = document.getElementById("lineColorEl");

  shapes[selectedShape].radiusX = radiusX.value;
  shapes[selectedShape].radiusY = radiusY.value;
  shapes[selectedShape].lineWidth = lineWidth.value;
  shapes[selectedShape].lineColor = lineColor.value;

  showElData();
}
