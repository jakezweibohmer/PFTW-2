function setup () {
  createCanvas(600, 600);
}

function createTile (originX, originY, primaryColor, secondaryColor, circleOutlineColor, dotColor, secondDotColor) {
  translate(originX, originY);
  fill(primaryColor);
  rect(0, 0, 200, 200);

  // diagonal strokes
  stroke(secondaryColor);
  strokeWeight(5);
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);

  // vert and hor strokes
  stroke(205, 240, 184);
  strokeWeight(3);
  line(100, 0, 100, 200);
  line(0, 100, 200, 100);
  
  // outlined circles
  noFill();
  stroke(circleOutlineColor);
  strokeWeight(5);
  circle(100, 100, 100);
  noFill();
  stroke(circleOutlineColor);
  strokeWeight(3);
  circle(100, 100, 170);
  circle(100, 100, 180);
  
  // big circles
  noStroke();
  fill(dotColor);
  circle(100, 50, 50);
  circle(50, 100, 50);
  circle(150, 100, 50);
  circle(100, 150, 50);
  circle(100, 100, 25);
  
  // small circles
  noStroke();
  fill(secondDotColor);
  circle(100, 50, 25);
  circle(50, 100, 25);
  circle(150, 100, 25);
  circle(100, 150, 25);
  circle(100, 100, 15);

}

function draw () {
  createTile(0, 0, 'lightgreen', 'teal', 'white', 'yellow', 'teal');
  createTile(0, 200, 'teal', 'white', 'lightgreen', 'lightgreen', 'yellow');
  createTile(0, 200, 'lightgreen', 'teal', 'white', 'yellow', 'teal');
  createTile(200, -400, 'teal', 'white', 'lightgreen', 'lightgreen', 'yellow');
  createTile(0, 200, 'lightgreen', 'teal', 'white', 'yellow', 'teal');
  createTile(0, 200, 'teal', 'white', 'lightgreen', 'lightgreen', 'yellow');
  createTile(0, 200, 'teal', 'white', 'lightgreen', 'lightgreen', 'yellow');
  createTile(200, -600, 'lightgreen', 'teal', 'white', 'yellow', 'teal');
  createTile(0, 200, 'teal', 'white', 'lightgreen', 'lightgreen', 'yellow');
  createTile(0, 200, 'lightgreen', 'teal', 'white', 'yellow', 'teal');
}