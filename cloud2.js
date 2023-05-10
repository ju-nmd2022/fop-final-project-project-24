export class Cloud2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 4;
    this.direction = 1;
    // později přidat i width
  }

  draw(x, y) {
    strokeWeight(20);
    //čtvrý parametr je potom opacity
    stroke(24, 212, 235);
    line(this.x + 250, this.y + 145, this.x + 370, this.y + 145);
    line(this.x + 303, this.y + 130, this.x + 303, this.y + 120);
    line(this.x + 265, this.y + 120, this.x + 340, this.y + 120);

    this.x = this.x - this.speed * this.direction;
    if (this.x <= -390 || this.x >= 500) {
      this.direction = -this.direction;
    }
  }
}
