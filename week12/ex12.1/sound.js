var song;
var button;
var amp;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Corrosion of Conformity's "The Door"
  song = loadSound("TheDoor.mp3", loaded);
  amp = new p5.Amplitude();
  background(51);
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function draw() {
  background(255);

  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 30, 1200);
  noStroke();
  fill(255, 0, 255);
  ellipse(width / 2, height / 2, diam, diam);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("pause");
  } else {
    song.stop();
    button.html("play");
  }
}

function windowResized() {
  // Resize canvas when window size changes
  resizeCanvas(windowWidth, windowHeight);
}
