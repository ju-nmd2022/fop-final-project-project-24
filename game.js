import { Cloud1 } from "./cloud1";

class Game {
  constructor() {
    this.gameObjects = [];
    this.setUp();
  }

  setUp() {
    this.gameObjects = [];
    this.gameObjects.push(new Cloud1(100, 100));
  }

  restart() {}

  run() {
    for (let i = 0; i < this.gameObjects.length; i++) {
      //if the object has the function draw (js can tell that "function" is a function)
      //typeof tells me what type (number, function, etc.) an information is
      if (typeof this.gameObjects[i].draw == "function") {
        //and if it has the draw function, this line will move it
        this.gameObjects[i].draw(/*this.obstacleVelocity*/);
      }
    }
    // contidions to end the game
    if (this.endGame === true) {
    }
    return {
      gameOver: false,
      score: this.score,
    };
  }
}
