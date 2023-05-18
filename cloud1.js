export class Cloud1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 4;
    this.direction = 1;
    this.width = 140;
    this.height = 45;
    this.color = "#18D4EB";
  }

  collisionInfo() {
    return {
      x: this.x - 10,
      y: this.y + 170,
      width: this.width,
      height: this.height,
    };
  }

  draw(x, y) {
    strokeWeight(20);
    //čtvrý parametr je potom opacity
    stroke(this.color);
    line(this.x + 36, this.y + 205, this.x + 120, this.y + 205);
    line(this.x + 51, this.y + 190, this.x + 51, this.y + 190);
    line(this.x, this.y + 180, this.x + 75, this.y + 180);

    this.x = this.x + this.speed * this.direction;
    if (this.x >= 900 || this.x <= -1) {
      this.direction = -this.direction;
    }
  }
}
