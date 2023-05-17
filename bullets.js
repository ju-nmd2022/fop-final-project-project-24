export class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 15;
    this.acc = 0.2;
    this.width = 10;
    this.height = 10;
  }

  update() {
    this.y -= this.speed;
    this.speed += this.acc;
  }

  show() {
    noStroke();
    fill("#ff00ff");
    ellipse(this.x, this.y, this.width, this.height);
  }
}
