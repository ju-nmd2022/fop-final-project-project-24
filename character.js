export class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.color = "#EDC9AE";
    this.height = 145;
    this.width = 45;
    this.lives = 3;
  }

  collisionInfo() {
    return {
      x: this.x + 70,
      y: this.y + 90,
      width: this.width,
      height: this.height,
    };
  }

  draw(x, y) {
    // loadImage("images/straight.png", (characterStraightImg) => {
    //   image(characterStraightImg, this.x, this.y);
    // });
    //obdélníček tady!!!
    // fill(234, 190, 50);
    // noStroke();
    // rect(this.x + 70, this.y + 90, this.width, this.height);
    //původní verze panáčka
    // push();
    // scale(0.5);
    // //tady tohle je barvička panáčka (i v right a left) - vytvořit this.colour?
    // fill(this.color);
    // noStroke();
    // ellipse(this.x + 292, this.y + 300, 37, 45);
    // rect(this.x + 287, this.y + 315, 12, 20);
    // rect(this.x + 269, this.y + 335, 50, 100);
    // ellipse(this.x + 268, this.y + 373, 30, 80);
    // ellipse(this.x + 318, this.y + 373, 30, 80);
    // beginShape();
    // vertex(this.x + 263, this.y + 334);
    // vertex(this.x + 289, this.y + 325);
    // vertex(this.x + 289, this.y + 336);
    // endShape();
    // beginShape();
    // vertex(this.x + 324, this.y + 335);
    // vertex(this.x + 296, this.y + 338);
    // vertex(this.x + 294, this.y + 325);
    // endShape();
    // rect(this.x + 317, this.y + 384, 16, 35);
    // rect(this.x + 254, this.y + 384, 22, 35);
    // rect(this.x + 269, this.y + 433, 22, 70);
    // rect(this.x + 297, this.y + 433, 22, 70);
    // fill("#1f456e");
    // ellipse(this.x + 292, this.y + 299, 32, 37);
    // fill(255, 255, 255);
    // ellipse(this.x + 292, this.y + 299, 28, 30);
    // fill("#3944bc");
    // ellipse(this.x + 292, this.y + 299, 22, 27);
    // fill("#281e5d");
    // ellipse(this.x + 292, this.y + 299, 18, 20);
    // fill("#63c5da");
    // ellipse(this.x + 292, this.y + 299, 12, 15);
    // fill("#151e3d");
    // ellipse(this.x + 292, this.y + 299, 10, 12);
    // fill(255, 255, 255);
    // ellipse(this.x + 292, this.y + 299, 7, 10);
    // fill("#2c3e4c");
    // ellipse(this.x + 292, this.y + 299, 5, 7);
    // fill(0, 0, 0);
    // rect(this.x + 247, this.y + 415, 20, 10);
    // rect(this.x + 247, this.y + 422, 10, 20);
    // pop();
    fill(this.color);
    noStroke();
    ellipse(this.x + 92, this.y + 105, 25, 30);

    rect(this.x + 89, this.y + 115, 8, 10);
    rect(this.x + 79, this.y + 125, 30, 60);
    ellipse(this.x + 78, this.y + 150, 15, 50);
    ellipse(this.x + 108, this.y + 150, 16, 50);

    rect(this.x + 70, this.y + 156, 15, 35);
    rect(this.x + 101, this.y + 156, 15, 35);

    rect(this.x + 83, this.y + 185, 10, 50);
    rect(this.x + 93, this.y + 185, 10, 50);
    fill("#1f456e");
    ellipse(this.x + 92, this.y + 105, 20, 25);
    fill(255, 255, 255);
    ellipse(this.x + 92, this.y + 105, 18, 22);
    fill("#3944bc");
    ellipse(this.x + 92, this.y + 105, 15, 20);
    fill("#281e5d");
    ellipse(this.x + 92, this.y + 105, 12, 15);
    fill("#63c5da");
    ellipse(this.x + 92, this.y + 105, 10, 12);
    fill("#151e3d");
    ellipse(this.x + 92, this.y + 105, 7, 10);
    fill(255, 255, 255);
    ellipse(this.x + 92, this.y + 105, 5, 7);
    fill("#2c3e4c");
    ellipse(this.x + 92, this.y + 105, 2, 5);

    fill(0, 0, 0);
    rect(this.x + 67, this.y + 190, 12, 7);
    rect(this.x + 67, this.y + 190, 7, 15);
  }

  //   keyIsDown(39)
  toRight(x, y) {
    //obdélníček
    // fill(this.color);
    // noStroke();
    // rect(this.x, this.y, this.width, this.height);
    //původní character
    // push();
    // scale(0.5);
    // noStroke();
    // fill(237, 201, 174);
    // ellipse(this.x + 290, this.y + 300, 33, 45);
    // rect(this.x + 285, this.y + 315, 12, 20);
    // strokeWeight(37);
    // stroke(237, 201, 174);
    // line(this.x + 291, this.y + 347, this.x + 291, this.y + 410);
    // strokeWeight(20);
    // rect(this.x + 289, this.y + 413, 1, 75);
    // line(this.x + 309, this.y + 417, this.x + 340, this.y + 482);
    // strokeWeight(18);
    // line(this.x + 340, this.y + 485, this.x + 350, this.y + 480);
    // line(this.x + 288, this.y + 495, this.x + 307, this.y + 495);
    // line(this.x + 289, this.y + 393, this.x + 348, this.y + 346);
    // noStroke();
    // fill("#1f456e");
    // ellipse(this.x + 290, this.y + 299, 27, 37);
    // fill(255, 255, 255);
    // ellipse(this.x + 290, this.y + 299, 22, 30);
    // fill("#3944bc");
    // ellipse(this.x + 290, this.y + 299, 20, 27);
    // fill("#281e5d");
    // ellipse(this.x + 290, this.y + 299, 18, 20);
    // fill("#63c5da");
    // ellipse(this.x + 290, this.y + 299, 12, 15);
    // fill("#151e3d");
    // ellipse(this.x + 290, this.y + 299, 10, 12);
    // fill(255, 255, 255);
    // ellipse(this.x + 290, this.y + 299, 7, 10);
    // fill("#2c3e4c");
    // ellipse(this.x + 290, this.y + 299, 5, 7);
    // fill(0, 0, 0);
    // rect(this.x + 340, this.y + 335, 10, 20);
    // rect(this.x + 340, this.y + 335, 25, 10);
    // pop();
    fill(this.color);
    noStroke();
    ellipse(this.x + 92, this.y + 105, 25, 30);

    rect(this.x + 89, this.y + 115, 8, 10);
    rect(this.x + 79, this.y + 125, 30, 60);
    ellipse(this.x + 78, this.y + 150, 15, 50);
    ellipse(this.x + 108, this.y + 150, 16, 50);

    rect(this.x + 70, this.y + 156, 15, 35);
    rect(this.x + 101, this.y + 156, 15, 35);

    rect(this.x + 83, this.y + 185, 10, 50);
    rect(this.x + 93, this.y + 185, 10, 50);
    fill("#1f456e");
    ellipse(this.x + 92, this.y + 105, 20, 25);
    fill(255, 255, 255);
    ellipse(this.x + 92, this.y + 105, 18, 22);
    fill("#3944bc");
    ellipse(this.x + 92, this.y + 105, 15, 20);
    fill("#281e5d");
    ellipse(this.x + 92, this.y + 105, 12, 15);
    fill("#63c5da");
    ellipse(this.x + 92, this.y + 105, 10, 12);
    fill("#151e3d");
    ellipse(this.x + 92, this.y + 105, 7, 10);
    fill(255, 255, 255);
    ellipse(this.x + 92, this.y + 105, 5, 7);
    fill("#2c3e4c");
    ellipse(this.x + 92, this.y + 105, 2, 5);

    fill(0, 0, 0);
    rect(this.x + 67, this.y + 190, 12, 7);
    rect(this.x + 67, this.y + 190, 7, 15);
  }

  //   keyIsDown(37)

  toLeft(x, y) {
    //obdélníček
    // fill(this.color);
    // noStroke();
    // rect(this.x, this.y, this.width, this.height);
    //původní character
    // push();
    // scale(0.5);
    // stroke(237, 201, 174);
    // fill(237, 201, 174);
    // noStroke();
    // ellipse(this.x + 290, this.y + 300, 33, 45);
    // rect(this.x + 285, this.y + 315, 12, 20);
    // strokeWeight(37);
    // stroke(237, 201, 174);
    // line(this.x + 290, this.y + 347, this.x + 290, this.y + 410);
    // strokeWeight(20);
    // rect(this.x + 290, this.y + 413, 1, 75);
    // line(this.x + 283, this.y + 411, this.x + 245, this.y + 470);
    // strokeWeight(18);
    // line(this.x + 292, this.y + 496, this.x + 268, this.y + 497);
    // line(this.x + 242, this.y + 470, this.x + 230, this.y + 459);
    // line(this.x + 289, this.y + 387, this.x + 229, this.y + 347);
    // noStroke();
    // fill("#1f456e");
    // ellipse(this.x + 290, this.y + 299, 27, 37);
    // fill(255, 255, 255);
    // ellipse(this.x + 290, this.y + 299, 22, 30);
    // fill("#3944bc");
    // ellipse(this.x + 290, this.y + 299, 20, 27);
    // fill("#281e5d");
    // ellipse(this.x + 290, this.y + 299, 18, 20);
    // fill("#63c5da");
    // ellipse(this.x + 290, this.y + 299, 12, 15);
    // fill("#151e3d");
    // ellipse(this.x + 290, this.y + 299, 10, 12);
    // fill(255, 255, 255);
    // ellipse(this.x + 290, this.y + 299, 7, 10);
    // fill("#2c3e4c");
    // ellipse(this.x + 290, this.y + 299, 5, 7);
    // fill(0, 0, 0);
    // rect(this.x + 229, this.y + 335, 10, 20);
    // rect(this.x + 217, this.y + 335, 20, 10);
    // pop();
    fill(this.color);
    noStroke();
    ellipse(this.x + 92, this.y + 105, 25, 30);

    rect(this.x + 89, this.y + 115, 8, 10);
    rect(this.x + 79, this.y + 125, 30, 60);
    ellipse(this.x + 78, this.y + 150, 15, 50);
    ellipse(this.x + 108, this.y + 150, 16, 50);

    rect(this.x + 70, this.y + 156, 15, 35);
    rect(this.x + 101, this.y + 156, 15, 35);

    rect(this.x + 83, this.y + 185, 10, 50);
    rect(this.x + 93, this.y + 185, 10, 50);
    fill("#1f456e");
    ellipse(this.x + 92, this.y + 105, 20, 25);
    fill(255, 255, 255);
    ellipse(this.x + 92, this.y + 105, 18, 22);
    fill("#3944bc");
    ellipse(this.x + 92, this.y + 105, 15, 20);
    fill("#281e5d");
    ellipse(this.x + 92, this.y + 105, 12, 15);
    fill("#63c5da");
    ellipse(this.x + 92, this.y + 105, 10, 12);
    fill("#151e3d");
    ellipse(this.x + 92, this.y + 105, 7, 10);
    fill(255, 255, 255);
    ellipse(this.x + 92, this.y + 105, 5, 7);
    fill("#2c3e4c");
    ellipse(this.x + 92, this.y + 105, 2, 5);

    fill(0, 0, 0);
    rect(this.x + 67, this.y + 190, 12, 7);
    rect(this.x + 67, this.y + 190, 7, 15);
  }
}
