let x = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  stroke(255);
}

function draw() {
  background(0);
  x = x + 1;
  if (x > width) {
    x = 5;
  }
  stroke(255, 0, 0); // Set stroke color to red
  line(x - 1, 0, x - 1, height); // Draw the red line

  // Draw the white line
  stroke(255); // Set stroke color to white
  line(x, 0, x, height); // Draw the white line
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
