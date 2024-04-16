let waves = []; // Array to store sine wave objects

function setup() {
  createCanvas(800, 500);

  // Create initial sine wave objects
  for (let i = 0; i < 5; i++) {
    let wave = {
      x: 0, // Initial x position
      y: height / 2, // Y position of the sine wave
      speed: 1, // Random speed
      amplitude: random(50, 100), // Random amplitude
      color: color(random(255), random(255), random(255)), // Random color
      angle: 300, // Angle for oscillation
    };
    waves.push(wave); // Add the wave object to the array
  }
}

function draw() {
  background(0);

  for (let i = 0; i < waves.length; i++) {
    let wave = waves[i];

    // Calculate the x position based on speed
    wave.x += wave.speed;

    // Draw the sine wave
    stroke(wave.color);
    noFill();
    beginShape();
    for (let x = 0; x < width; x += 5) {
      let y = wave.y + sin(wave.angle + x) * wave.amplitude;
      vertex(x, y);
    }
    endShape();

    // Increment the angle for oscillation
    wave.angle += 0.1;

    // Reset x position if it goes beyond canvas width
    if (wave.x > width) {
      wave.x = 0;
    }
  }
}
