export class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.direction = 1;
    // později přidat i width
  }

  draw(x, y) {
    strokeWeight(20);
    stroke("#18d4eb");
    fill(24, 212, 235);
    line(this.x + 100, this.y + 50, this.x + 220, this.y + 50);
    line(this.x + 173, this.y + 50, this.x + 173, this.y + 70);
    line(this.x + 123, this.y + 75, this.x + 200, this.y + 75);

    this.x = this.x + this.speed * this.direction;
    if (this.x >= 900 || this.x <= -800) {
      this.direction = -this.direction;
    }
  }
}
