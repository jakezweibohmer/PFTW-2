function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // "scene with sphere and directional light.
  // The direction of the light is controlled with the mouse position."
}
function draw() {
  background(0);
  //move your mouse to change light direction
  let dirX = (mouseX / width - 0.5) * 1;
  let dirY = (mouseY / height - 0.5) * 1;
  directionalLight(7, 247, 239, -dirX, -dirY, -0.1);
  noStroke();
  sphere(200);
}

function windowResized() {
  // Resize canvas when window size changes
  resizeCanvas(windowWidth, windowHeight);
}
