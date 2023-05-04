export class Flash {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.acceleration = 0.4;
    this.width = 35;
    this.height = 75;
  }
  draw(x, y) {
    fill("#eefc55");
    noStroke();
    beginShape();
    vertex(this.x + 153, this.y + 314);
    vertex(this.x + 135, this.y + 350);
    vertex(this.x + 120, this.y + 350);
    endShape();
    rect(this.x + 120, this.y + 350, 25, 9);

    beginShape();
    vertex(this.x + 145, this.y + 359);
    vertex(this.x + 124, this.y + 390);
    vertex(this.x + 133, this.y + 359);
    endShape();
  }

  update() {
    this.y += this.speed;
    this.speed = this.speed + this.acceleration;
  }
}
