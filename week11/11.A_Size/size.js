let circleSize = 400; // Initial size of the circle
let circleColor; // Color of the circle

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleColor = color(0); // Initialize circle color to black
}

function draw() {
  // Draw the circle at the mouse coordinates while mouse is pressed
  if (mouseIsPressed) {
    fill(circleColor); // Set fill color to circleColor
    ellipse(mouseX, mouseY, circleSize, circleSize);
  }
}

function mousePressed() {
  // Change circleColor to random color when mouse is pressed
  circleColor = color(random(255), random(255), random(255));
  circleSize = random(20, 200);
}

function mouseDragged() {
  // Draw the circle while mouse is pressed and dragged
  fill(circleColor); // Set fill color to circleColor
  noStroke();
  ellipse(mouseX, mouseY, circleSize, circleSize);
}

function windowResized() {
  // Resize canvas when window size changes
  resizeCanvas(windowWidth, windowHeight);
}
