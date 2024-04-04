function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // "scene with sphere and directional light.
  // The direction of the light is controlled with the mouse position."
}
function draw() {
  //move your mouse to change light direction
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(0, 255, 251, -dirX, -dirY, -0.25);
  fill(255);
  noStroke();
  sphere(200);
  box(100);
}

function windowResized() {
  // Resize canvas when window size changes
  resizeCanvas(windowWidth, windowHeight);
}
