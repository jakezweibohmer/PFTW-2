function setup() {
  // Create canvas with window width and height
  // WEBGL turns canvas into 3D space
  createCanvas(windowWidth, windowHeight, WEBGL);
  noFill();
}

function draw() {
  background(0);
  rotateY(90 / 4);
  // The three stationary blue boxes
  stroke(0, 246, 255);
  box(80);
  stroke(0, 246, 255);
  box(300);
  stroke(0, 246, 255);
  box(800);
  strokeWeight(2);

  // Speed of rotation
  let rad = millis() / 2000;

  // Set rotation angles
  let ct = cos(rad);
  let st = sin(rad);

  // Matrix for rotation around the Y axis
  applyMatrix(
    ct,
    0.0,
    st,
    0.0,
    0.5,
    1.0,
    0.0,
    0.0,
    -st,
    0.0,
    ct,
    0.0,
    0.0,
    0.0,
    0.0,
    1.0
  );
  // The two rotating magenta boxes based on matrix, above
  stroke(255, 0, 187);
  box(200);
  stroke(255, 0, 187);
  box(500);
  strokeWeight(3);
}

function windowResized() {
  // Resize canvas when window size changes
  resizeCanvas(windowWidth, windowHeight);
}
