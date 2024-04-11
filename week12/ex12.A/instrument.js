// sound variables
// sounds downloaded from: https://mixkit.co/free-sound-effects/
let sound1,
  sound2,
  sound3,
  sound4,
  sound5,
  sound6,
  sound7,
  sound8,
  sound9,
  sound10;

// Preload sounds
window.addEventListener("DOMContentLoaded", function () {
  sound1 = new Audio("sounds/sound1.wav");
  sound2 = new Audio("sounds/sound2.wav");
  sound3 = new Audio("sounds/sound3.wav");
  sound4 = new Audio("sounds/sound4.wav");
  sound5 = new Audio("sounds/sound5.wav");
  sound6 = new Audio("sounds/sound6.wav");
  sound7 = new Audio("sounds/sound7.wav");
  sound8 = new Audio("sounds/sound8.wav");
  sound9 = new Audio("sounds/sound9.wav");
  sound10 = new Audio("sounds/sound10.wav");
});

// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("sound1").addEventListener("mousedown", function () {
    sound1.play();
  });
  document.getElementById("sound2").addEventListener("mousedown", function () {
    sound2.play();
  });
  document.getElementById("sound3").addEventListener("mousedown", function () {
    sound3.play();
  });
  document.getElementById("sound4").addEventListener("mousedown", function () {
    sound4.play();
  });
  document.getElementById("sound5").addEventListener("mousedown", function () {
    sound5.play();
  });
  document.getElementById("sound6").addEventListener("mousedown", function () {
    sound6.play();
  });
  document.getElementById("sound7").addEventListener("mousedown", function () {
    sound7.play();
  });
  document.getElementById("sound8").addEventListener("mousedown", function () {
    sound8.play();
  });
  document.getElementById("sound9").addEventListener("mousedown", function () {
    sound9.play();
  });
  document.getElementById("sound10").addEventListener("mousedown", function () {
    sound10.play();
  });
});
