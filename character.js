export class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.color = "#EDC9AE";
    this.height = 145;
    this.width = 45;
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
 
    fill(this.color);
    noStroke();
    ellipse(this.x + 92, this.y + 105, 25, 30);

    rect(this.x + 89, this.y + 115, 8, 10);
    stroke(this.color);
    strokeWeight(20);
    line(this.x+93, this.y+134, this.x+93, this.y+175);
    strokeWeight(15);
    line(this.x+93, this.y+147, this.x+130, this.y+135);
    line(this.x+93, this.y+175, this.x+93, this.y+210);
    line(this.x+93, this.y+175, this.x+130, this.y+200);
    line( this.x+130, this.y+200, this.x+135, this.y+195);
    line( this.x+92, this.y+216, this.x+100, this.y+216);

    noStroke();
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
    rect(this.x + 130, this.y + 130, 16, 7);
    rect(this.x + 130, this.y + 130, 7, 15);
  }

  //   keyIsDown(37)

  toLeft(x, y) {
    fill(this.color);
    noStroke();
    ellipse(this.x + 92, this.y + 105, 25, 30);

    rect(this.x + 89, this.y + 115, 8, 10);
    stroke(this.color);
    strokeWeight(20);
    line(this.x+93, this.y+134, this.x+93, this.y+175);
    strokeWeight(15);
    line(this.x+93, this.y+147, this.x+60, this.y+135);
    line(this.x+93, this.y+175, this.x+93, this.y+210);
    line(this.x+93, this.y+175, this.x+60, this.y+200);
    line( this.x+60, this.y+200, this.x+55, this.y+195);
    line( this.x+85, this.y+216, this.x+95, this.y+216);

    noStroke();
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
    rect(this.x + 40, this.y + 130, 16, 7);
    rect(this.x + 50, this.y + 130, 7, 15);
  }
}
