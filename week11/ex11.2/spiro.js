let drawing = false;

function setup() {
  createCanvas(2500, 1200);
  background(0);
}

function draw() {
  if (drawing) {
    let x1 = random(width); // Random x coordinate
    let y1 = random(height); // Random y coordinate
    let x2 = x1 + random(-50, 100); // Random x offset for the end point
    let y2 = y1 + random(-50, 100); // Random y offset for the end point

    let randomWeight = random(0.5, 50);
    // random RGB colors
    let randomColor = color(random(255), random(255), random(255));

    stroke(randomColor);
    strokeWeight(randomWeight);

    // Draw line from (x1, y1) to (x2, y2)
    line(x1, y1, x2, y2);
  }
}

function mouseClicked() {
  // Toggle drawing mode on and off
  drawing = !drawing;
}
