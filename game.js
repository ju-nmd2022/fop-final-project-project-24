let bg;
let gameIsOn = true;

function preload() {
  bg = loadImage("images/gameBackground.png");
}

function setUp() {
  createCanvas(3024, 1964);
}

// clouds
function cloud(x, y) {
  strokeWeight(20);
  stroke("#18d4eb");
  fill(24, 212, 235);
  line(x + 100, y + 100, x + 220, y + 100);
  line(x + 173, y + 100, x + 173, y + 120);
  line(x + 123, y + 125, x + 200, y + 125);

  // line(x + 250, y + 125, x + 370, y + 125);
  // line(x + 293, y + 100, x + 293, y + 120);
  // line(x + 255, y + 100, x + 330, y + 100);

  //   fill(255, 255, 255);
  //   line(x + 255, y + 200, x + 350, y + 200);
  //   line(x + 125, y + 200, x + 200, y + 200);

  //   line(x + 439, y + 198, x + 490, y + 198);

  fill(255, 0, 0);
  line(x + 436, y + 105, x + 520, y + 105);
  line(x + 451, y + 99, x + 451, y + 90);
  line(x + 395, y + 80, x + 475, y + 80);

  //   fill("#eefc55");
  //   noStroke();
  //   beginShape();
  //   vertex(x + 153, y + 314);
  //   vertex(x + 135, y + 350);
  //   vertex(x + 120, y + 350);
  //   endShape();

  //   rect(x + 120, y + 350, 25, 9);

  //   beginShape();
  //   vertex(x + 145, y + 359);
  //   vertex(x + 124, y + 390);
  //   vertex(x + 133, y + 359);
  //   endShape();

  //   beginShape();
  //   vertex(x + 212, y + 319);
  //   vertex(x + 195, y + 360);
  //   vertex(x + 212, y + 360);
  //   endShape();

  //   beginShape();
  //   vertex(x + 209, y + 356);
  //   vertex(x + 209, y + 390);
  //   endShape();
}

let x = 0;
let y = 0;
let help = true;

function draw() {
  background(bg);

  if (gameIsOn) {
    x = x + 5;
    if (x >= 1300) {
      x = -100;
    }
  }
  cloud(x, y);
}
