let bg;
let gameIsOn = true;

function preload() {
  bg = loadImage("gameBackground.png");
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

function movement(a, b) {
  if (keyIsDown(39)) {
    push();
    scale(0.5);
    noStroke();
    fill(237, 201, 174);
    ellipse(a + 450, b + 300, 33, 45);

    rect(a + 445, b + 315, 12, 20);
    strokeWeight(37);
    stroke(237, 201, 174);
    line(a + 451, b + 347, a + 451, b + 410);

    strokeWeight(20);
    rect(a + 449, b + 413, 1, 75);
    line(a + 459, b + 417, a + 500, b + 482);
    strokeWeight(18);
    line(a + 500, b + 485, a + 510, b + 480);
    line(a + 448, b + 495, a + 467, b + 495);
    line(a + 449, b + 393, a + 508, b + 346);

    noStroke();
    fill("#1f456e");
    ellipse(a + 450, b + 299, 27, 37);
    fill(255, 255, 255);
    ellipse(a + 450, b + 299, 22, 30);
    fill("#3944bc");
    ellipse(a + 450, b + 299, 20, 27);
    fill("#281e5d");
    ellipse(a + 450, b + 299, 18, 20);
    fill("#63c5da");
    ellipse(a + 450, b + 299, 12, 15);
    fill("#151e3d");
    ellipse(a + 450, b + 299, 10, 12);
    fill(255, 255, 255);
    ellipse(a + 450, b + 299, 7, 10);
    fill("#2c3e4c");
    ellipse(a + 450, b + 299, 5, 7);
    pop();
  }
  if (keyIsDown(37)) {
    push();
    scale(0.5);
    stroke(237, 201, 174);
    fill(237, 201, 174);
    noStroke();
    ellipse(a + 640, b + 300, 33, 45);

    rect(a + 635, b + 315, 12, 20);
    strokeWeight(37);
    stroke(237, 201, 174);
    line(a + 640, b + 347, a + 640, b + 410);

    strokeWeight(20);
    rect(a + 640, b + 413, 1, 75);
    line(a + 633, b + 411, a + 595, b + 470);
    strokeWeight(18);
    line(a + 642, b + 496, a + 618, b + 497);
    line(a + 592, b + 470, a + 580, b + 459);
    line(a + 639, b + 387, a + 579, b + 347);

    noStroke();
    fill("#1f456e");
    ellipse(a + 640, b + 299, 27, 37);
    fill(255, 255, 255);
    ellipse(a + 640, b + 299, 22, 30);
    fill("#3944bc");
    ellipse(a + 640, b + 299, 20, 27);
    fill("#281e5d");
    ellipse(a + 640, b + 299, 18, 20);
    fill("#63c5da");
    ellipse(a + 640, b + 299, 12, 15);
    fill("#151e3d");
    ellipse(a + 640, b + 299, 10, 12);
    fill(255, 255, 255);
    ellipse(a + 640, b + 299, 7, 10);
    fill("#2c3e4c");
    ellipse(a + 640, b + 299, 5, 7);
    pop();
  }
}

function character(a, b) {
  push();
  scale(0.5);
  fill(237, 201, 174);
  noStroke();
  ellipse(a + 292, b + 300, 37, 45);

  rect(a + 287, b + 315, 12, 20);
  rect(a + 269, b + 335, 50, 100);
  ellipse(a + 268, b + 373, 30, 80);
  ellipse(a + 318, b + 373, 30, 80);

  beginShape();
  vertex(a + 263, b + 334);
  vertex(a + 289, b + 325);
  vertex(a + 289, b + 336);
  endShape();

  beginShape();
  vertex(a + 324, b + 335);
  vertex(a + 296, b + 338);
  vertex(a + 294, b + 325);
  endShape();

  rect(a + 317, b + 384, 16, 35);
  rect(a + 254, b + 384, 22, 35);

  rect(a + 269, b + 433, 22, 70);
  rect(a + 297, b + 433, 22, 70);

  fill("#1f456e");
  ellipse(a + 292, b + 299, 32, 37);
  fill(255, 255, 255);
  ellipse(a + 292, b + 299, 28, 30);
  fill("#3944bc");
  ellipse(a + 292, b + 299, 22, 27);
  fill("#281e5d");
  ellipse(a + 292, b + 299, 18, 20);
  fill("#63c5da");
  ellipse(a + 292, b + 299, 12, 15);
  fill("#151e3d");
  ellipse(a + 292, b + 299, 10, 12);
  fill(255, 255, 255);
  ellipse(a + 292, b + 299, 7, 10);
  fill("#2c3e4c");
  ellipse(a + 292, b + 299, 5, 7);
  pop();
}

let x = 0;
let y = 0;
let help = true;
const speed = 7;
let a = 200;
let b = 200;

function draw() {
  background(bg);

  if (gameIsOn) {
    x = x + 5;
    if (x >= 1300) {
      x = -100;
    }
  }
  cloud(x, y);
  if (keyIsDown(37)) {
    a = a - speed;
    movement(a - 300, b + 245);
  } else if (keyIsDown(39)) {
    a = a + speed;
    movement(a - 200, b + 245);
  } else {
    character(a, b + 245);
  }
}
