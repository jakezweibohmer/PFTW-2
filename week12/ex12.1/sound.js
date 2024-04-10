let song;
let button;
let amp;

function setup() {
  createCanvas(700, 400);
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
  background(0);

  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.3, 30, 1500);
  // red circle
  stroke(245, 107, 109);
  strokeWeight(20);
  fill(255, 0, 0);
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
