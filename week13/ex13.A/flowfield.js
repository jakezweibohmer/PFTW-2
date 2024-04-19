var points = [];
var mult;
var r1;
var r2;
var g1;
var g2;
var b1;
var b2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noiseDetail(1);

  // sets the density of the lines generated
  var density = 30;
  var space = width / density;

  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-20, 10), y + random(-10, 10));
      points.push(p);
    }
  }

  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);

  // randomizes the speed of the rendering
  mult = random(0.001, 0.007);
}

function draw() {
  noStroke();

  // sets color of the strokes to random variations of rgb
  for (var i = 0; i < points.length; i++) {
    var r = map(points[i].x, 0, width, r1, r2);
    var g = map(points[i].y, 0, height, g1, g2);
    var b = map(points[i].x, 0, width, b1, b2);
    // alpha determines the edge opacity
    // var alpha = map(
    //   dist(width / 2, height / 2, points[i].x, points[i].y),
    //   0,
    //   350,
    //   400,
    //   0
    // );

    fill(r, g, b);

    var angle = map(
      noise(points[i].x * mult, points[i].y * mult),
      0,
      1,
      0,
      720
    );

    points[i].add(createVector(cos(angle), sin(angle)));

    // if (dist(width / 2, height / 2, points[i].x, points[i].y) < 350) {
    ellipse(points[i].x, points[i].y, 1);
    // }
  }
}

function mouseClicked() {
  saveCanvas("flowfield", "png");
}
