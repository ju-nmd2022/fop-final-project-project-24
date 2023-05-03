export class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
  }
  draw(x, y) {
    push();
    scale(0.5);
    fill(237, 201, 174);
    noStroke();
    ellipse(this.x + 292, this.y + 300, 37, 45);

    rect(this.x + 287, this.y + 315, 12, 20);
    rect(this.x + 269, this.y + 335, 50, 100);
    ellipse(this.x + 268, this.y + 373, 30, 80);
    ellipse(this.x + 318, this.y + 373, 30, 80);

    beginShape();
    vertex(this.x + 263, this.y + 334);
    vertex(this.x + 289, this.y + 325);
    vertex(this.x + 289, this.y + 336);
    endShape();

    beginShape();
    vertex(this.x + 324, this.y + 335);
    vertex(this.x + 296, this.y + 338);
    vertex(this.x + 294, this.y + 325);
    endShape();

    rect(this.x + 317, this.y + 384, 16, 35);
    rect(this.x + 254, this.y + 384, 22, 35);

    rect(this.x + 269, this.y + 433, 22, 70);
    rect(this.x + 297, this.y + 433, 22, 70);
    fill("#1f456e");
    ellipse(this.x + 292, this.y + 299, 32, 37);
    fill(255, 255, 255);
    ellipse(this.x + 292, this.y + 299, 28, 30);
    fill("#3944bc");
    ellipse(this.x + 292, this.y + 299, 22, 27);
    fill("#281e5d");
    ellipse(this.x + 292, this.y + 299, 18, 20);
    fill("#63c5da");
    ellipse(this.x + 292, this.y + 299, 12, 15);
    fill("#151e3d");
    ellipse(this.x + 292, this.y + 299, 10, 12);
    fill(255, 255, 255);
    ellipse(this.x + 292, this.y + 299, 7, 10);
    fill("#2c3e4c");
    ellipse(this.x + 292, this.y + 299, 5, 7);

    fill(0, 0, 0);
    rect(this.x + 247, this.y + 415, 20, 10);
    rect(this.x + 247, this.y + 422, 10, 20);
    pop();
  }

  //   keyIsDown(39)
  toRight(x, y) {
    push();
    scale(0.5);
    noStroke();
    fill(237, 201, 174);
    ellipse(this.x + 450, this.y + 300, 33, 45);

    rect(this.x + 445, this.y + 315, 12, 20);
    strokeWeight(37);
    stroke(237, 201, 174);
    line(this.x + 451, this.y + 347, this.x + 451, this.y + 410);

    strokeWeight(20);
    rect(this.x + 449, this.y + 413, 1, 75);
    line(this.x + 459, this.y + 417, this.x + 500, this.y + 482);
    strokeWeight(18);
    line(this.x + 500, this.y + 485, this.x + 510, this.y + 480);
    line(this.x + 448, this.y + 495, this.x + 467, this.y + 495);
    line(this.x + 449, this.y + 393, this.x + 508, this.y + 346);

    noStroke();
    fill("#1f456e");
    ellipse(this.x + 450, this.y + 299, 27, 37);
    fill(255, 255, 255);
    ellipse(this.x + 450, this.y + 299, 22, 30);
    fill("#3944bc");
    ellipse(this.x + 450, this.y + 299, 20, 27);
    fill("#281e5d");
    ellipse(this.x + 450, this.y + 299, 18, 20);
    fill("#63c5da");
    ellipse(this.x + 450, this.y + 299, 12, 15);
    fill("#151e3d");
    ellipse(this.x + 450, this.y + 299, 10, 12);
    fill(255, 255, 255);
    ellipse(this.x + 450, this.y + 299, 7, 10);
    fill("#2c3e4c");
    ellipse(this.x + 450, this.y + 299, 5, 7);

    fill(0, 0, 0);
    rect(this.x + 500, this.y + 335, 10, 20);
    rect(this.x + 500, this.y + 335, 25, 10);
    pop();
  }

  //   keyIsDown(37)

  toLeft() {
    push();
    scale(0.5);
    stroke(237, 201, 174);
    fill(237, 201, 174);
    noStroke();
    ellipse(this.x + 640, this.y + 300, 33, 45);

    rect(this.x + 635, this.y + 315, 12, 20);
    strokeWeight(37);
    stroke(237, 201, 174);
    line(this.x + 640, this.y + 347, this.x + 640, this.y + 410);

    strokeWeight(20);
    rect(this.x + 640, this.y + 413, 1, 75);
    line(this.x + 633, this.y + 411, this.x + 595, this.y + 470);
    strokeWeight(18);
    line(this.x + 642, this.y + 496, this.x + 618, this.y + 497);
    line(this.x + 592, this.y + 470, this.x + 580, this.y + 459);
    line(this.x + 639, this.y + 387, this.x + 579, this.y + 347);

    noStroke();
    fill("#1f456e");
    ellipse(this.x + 640, this.y + 299, 27, 37);
    fill(255, 255, 255);
    ellipse(this.x + 640, this.y + 299, 22, 30);
    fill("#3944bc");
    ellipse(this.x + 640, this.y + 299, 20, 27);
    fill("#281e5d");
    ellipse(this.x + 640, this.y + 299, 18, 20);
    fill("#63c5da");
    ellipse(this.x + 640, this.y + 299, 12, 15);
    fill("#151e3d");
    ellipse(this.x + 640, this.y + 299, 10, 12);
    fill(255, 255, 255);
    ellipse(this.x + 640, this.y + 299, 7, 10);
    fill("#2c3e4c");
    ellipse(this.x + 640, this.y + 299, 5, 7);
    fill(0, 0, 0);
    rect(this.x + 579, this.y + 335, 10, 20);
    rect(this.x + 567, this.y + 335, 20, 10);
    pop();
  }
}