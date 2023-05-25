export class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 15;
    this.acc = 0.2;
    this.width = 10;
    this.height = 10;
  }
  detectIntersection(cloudCoordinates) {
    if (
      // characterCoordinates.y < this.y &&
      // characterCoordinates.y < this.y + this.height &&
      // characterCoordinates.x < this.x &&
      // this.x + this.width <= characterCoordinates.x &&

      //following 4 lines - chat GPT
      cloudCoordinates.x < this.x + this.width &&
      cloudCoordinates.x + 140 > this.x && //140 je šířka cloudu
      cloudCoordinates.y < this.y + this.height &&
      cloudCoordinates.y + 45 > this.y //45 výška cloudu
    ) {
      return true;
    }
    return false;
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
