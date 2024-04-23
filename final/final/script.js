// Load the MP3 file using Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioElement = document.getElementById("audioElement");
const source = audioContext.createMediaElementSource(audioElement);
const analyser = audioContext.createAnalyser();
source.connect(analyser);
analyser.connect(audioContext.destination);

// Set up Perlin noise parameters
const noiseScale = 0.1; // Adjust as needed
const noiseSpeed = 0.02; // Adjust as needed

// Set up Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Function to generate Perlin noise
function generatePerlinNoise(width, height, scale, speed) {
  const noise = new Array(width);
  for (let x = 0; x < width; x++) {
    noise[x] = new Array(height);
    for (let y = 0; y < height; y++) {
      noise[x][y] = PerlinNoise(x * scale, y * scale, speed);
    }
  }
  return noise;
}

// Function to draw Perlin noise on canvas
function drawNoise(ctx, noise) {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      const value = noise[x][y] * 255; // Scale noise to [0, 255]
      const pixelIndex = (y * canvas.width + x) * 4;
      imageData.data[pixelIndex] = value; // Red
      imageData.data[pixelIndex + 1] = value; // Green
      imageData.data[pixelIndex + 2] = value; // Blue
      imageData.data[pixelIndex + 3] = 255; // Alpha
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

// Render loop
function render() {
  requestAnimationFrame(render);

  // Analyze the audio
  const frequencyData = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(frequencyData);
  const amplitude = Math.max(...frequencyData) / 255;

  // Generate Perlin noise based on audio features
  const noise = generatePerlinNoise(
    canvas.width,
    canvas.height,
    noiseScale,
    noiseSpeed
  );

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw Perlin noise
  drawNoise(ctx, noise);
}

// Start rendering
render();
