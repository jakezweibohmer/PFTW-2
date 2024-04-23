// tutorial from: https://www.youtube.com/watch?v=XGioNBHrFU4

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
// adjust placement of text on screen here
let adjustX = 5;
let adjustY = -15;

// handle mouse
const mouse = {
  x: null,
  y: null,
  radius: 100,
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  mouse.radius = 150;
});

ctx.fillStyle = "#00d8ff";
ctx.font = "15px sans-serif";
// change the text for the visual here
ctx.fillText("PFTW", 0, 30);
ctx.fillText("2024", 0, 42);
ctx.fillText("FINAL", 0, 54);

const textCoordinates = ctx.getImageData(0, 0, 100, 100);

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // radius of particles
    this.size = 2;
    this.baseX = this.x;
    this.baseY = this.y;
    // how heavy particles are and how fast they move away from mouse
    this.density = Math.random() * 80 + 10;
  }

  draw() {
    ctx.fillStyle = "#00d8ff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

function init() {
  particleArray = [];
  for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
    for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
      if (
        textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128
      ) {
        let positionX = x + adjustX;
        let positionY = y + adjustY;
        // values for x and y here adjust size of image
        particleArray.push(new Particle(positionX * 20, positionY * 20));
      }
    }
  }

  //   for (let i = 0; i < 1000; i++) {
  //     let x = Math.random() * canvas.width;
  //     let y = Math.random() * canvas.height;
  //     particleArray.push(new Particle(x, y));
  //   }
}
init();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].draw();
    particleArray[i].update();
  }
  connect();
  requestAnimationFrame(animate);
}
animate();

function connect() {
  let opacityValue = 1;
  for (let a = 0; a < particleArray.length; a++) {
    for (let b = a; b < particleArray.length; b++) {
      // let dx = mouse.x - this.x;
      // let dy = mouse.y - this.y;
      // let distance = Math.sqrt(dx * dx + dy * dy);
      let dx = particleArray[a].x - particleArray[b].x;
      let dy = particleArray[a].y - particleArray[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      opacityValue = 1 - distance / 50;
      ctx.strokeStyle = "rgba(159, 240, 254," + opacityValue + ")";

      if (distance < 50) {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(particleArray[a].x, particleArray[a].y);
        ctx.lineTo(particleArray[b].x, particleArray[b].y);
        ctx.stroke();
      }
    }
  }
}
