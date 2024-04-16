function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  // sets the angle of the object
  rotateX(70);

  noFill();
  stroke(255);

  for (var i = 0; i < 70; i++) {
    // determines how the RGB color is mapped over time
    var r = map(sin(frameCount / 5), -1, 1, 100, 200);
    var g = map(i, 0, 50, 100, 200);
    var b = map(cos(frameCount), -1, 1, 200, 100);

    // continuously changes color in RGB spectrum
    stroke(r, g, b);

    //stays still and undulates
    rotate(3);
    // morphs into spinning forms
    // rotate(frameCount / 50);

    beginShape();
    // changes to the j += number changes shape
    // changing the angle from 360 opens the form
    for (var j = 0; j < 300; j += 50) {
      // i value changes form's size
      var rad = i * 15;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount + i * 3) * 50;

      vertex(x, y, z);
    }

    endShape(CLOSE);
  }
}

function windowResized() {
  // Resize canvas when window size changes
  resizeCanvas(windowWidth, windowHeight);
}
