class Heart {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = 50; // Adjust the heart width as needed
      this.height = 50; // Adjust the heart height as needed
    }
  
    display() {
      image(heartImage, this.x, this.y, this.width, this.height);
    }
  
    // ...
  }
  