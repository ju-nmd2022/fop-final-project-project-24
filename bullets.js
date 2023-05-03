export class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 10;
  }

  update() {
    this.y -= this.speed;
  }

  show() {
    push();
    scale(0.5);
    noStroke();
    fill('#ff00ff');
    ellipse(this.x, this.y, 17, 17);
    pop();
  }
}
