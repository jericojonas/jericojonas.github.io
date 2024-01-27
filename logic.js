function logicCircle(ctx, shape) {
  ctx.beginPath();
  ctx.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
  ctx.lineWidth = shape.lineWidth;
  ctx.strokeStyle = shape.color;
  ctx.stroke();
}

function logicRect(ctx, shape) {
  ctx.beginPath();
  ctx.rect(shape.x, shape.y, shape.width, shape.height);
  ctx.lineWidth = shape.lineWidth;
  ctx.strokeStyle = shape.color;
  ctx.stroke();
}

function logicTri(ctx, shape) {
  ctx.beginPath();
  ctx.moveTo(shape.x, shape.y - shape.height / 2);
  ctx.lineTo(shape.x + shape.sideLength / 2, shape.y + shape.height / 2);
  ctx.lineTo(shape.x - shape.sideLength / 2, shape.y + shape.height / 2);
  ctx.closePath();
  ctx.lineWidth = shape.lineWidth;
  ctx.strokeStyle = shape.color;
  ctx.stroke();
}

function logicEl(ctx, shape) {
  ctx.beginPath();
  ctx.ellipse(
    shape.x,
    shape.y,
    shape.radiusX,
    shape.radiusY,
    0,
    0,
    2 * Math.PI
  );
  ctx.lineWidth = shape.lineWidth;
  ctx.strokeStyle = shape.color;
  ctx.stroke();
}
