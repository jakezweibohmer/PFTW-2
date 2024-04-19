var points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);

  var density = 50;
  var space = width / density;

  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  noStroke();
  fill(255);

  for (var i = 0; i < points.length; i++) {
    var angle = map(noise(points[i].x, points));
    ellepse(points[i].x, points[i].y, 1);
  }
}
