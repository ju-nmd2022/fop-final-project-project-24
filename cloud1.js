export class Cloud1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.obstacleVelocity = 3;
  }

  draw() {
    strokeWeight(20);
    stroke("#18d4eb");
    fill(24, 212, 235);
    line(this.x + 100, this.y + 100, this.x + 220, this.y + 100);
    line(this.x + 173, this.y + 100, this.x + 173, this.y + 120);
    line(this.x + 123, this.y + 125, this.x + 200, this.y + 125);

    //tady pak dát hýbání se mraků
  }
}

let cloud1 = new Cloud1(200, 100);

cloud1.draw();