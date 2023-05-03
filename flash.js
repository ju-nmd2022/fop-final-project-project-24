class Flash {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw(x, y) {
    fill("#eefc55");
    noStroke();
    beginShape();
    vertex(x + 153, y + 314);
    vertex(x + 135, y + 350);
    vertex(x + 120, y + 350);
    endShape();
    rect(x + 120, y + 350, 25, 9);

    beginShape();
    vertex(x + 145, y + 359);
    vertex(x + 124, y + 390);
    vertex(x + 133, y + 359);
    endShape();
  }
}
