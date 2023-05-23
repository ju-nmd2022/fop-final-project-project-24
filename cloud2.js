export class Cloud2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 4;
    this.direction = 1;
    this.width = 140;
    this.height = 45;
    this.color = "#18D4EB";
    this.hitValue = 0;
  }

  collisionInfo() {
    return {
      x: this.x + 240,
      y: this.y + 110,
      width: this.width,
      height: this.height,
    };
  }

  draw(x, y) {
    // noStroke();
    // fill(255, 0, 255);
    // rect(this.x + 240, this.y + 110, this.width, this.height);
    strokeWeight(20);
    //čtvrý parametr je potom opacity
    stroke(this.color);
    line(this.x + 250, this.y + 145, this.x + 370, this.y + 145);
    line(this.x + 303, this.y + 130, this.x + 303, this.y + 120);
    line(this.x + 265, this.y + 120, this.x + 340, this.y + 120);

    this.x = this.x - this.speed * this.direction;
    if (this.x <= -390 || this.x >= 500) {
      this.direction = -this.direction;
    }
  }
}
