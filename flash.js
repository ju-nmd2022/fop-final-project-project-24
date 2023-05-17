export class Flash {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.acceleration = 0.4;
    this.width = 31;
    this.height = 70;
  }

  detectIntersection(characterCoordinates) {
    if (
      // characterCoordinates.y < this.y &&
      // characterCoordinates.y < this.y + this.height &&
      // characterCoordinates.x < this.x &&
      // this.x + this.width <= characterCoordinates.x &&

      //following 4 lines - chat GPT
      characterCoordinates.x < this.x + this.width &&
      characterCoordinates.x + 45 > this.x && //40 je šířka characteru myslím
      characterCoordinates.y < this.y + this.height &&
      characterCoordinates.y + 145 > this.y //115 je výška characteru
    ) {
      return true;
    }
    return false;
  }

  draw(x, y) {
    noStroke();
    // fill(234, 198, 80);
    // rect(this.x + 20, this.y + 17, this.width, this.height);
    fill("#eefc55");

    beginShape();
    vertex(this.x + 53, this.y + 14);
    vertex(this.x + 35, this.y + 50);
    vertex(this.x + 20, this.y + 50);
    endShape();
    rect(this.x + 20, this.y + 50, 25, 9);

    beginShape();
    vertex(this.x + 45, this.y + 59);
    vertex(this.x + 24, this.y + 90);
    vertex(this.x + 33, this.y + 59);
    endShape();
  }

  update() {
    this.y += this.speed;
    this.speed = this.speed + this.acceleration;
  }
}
