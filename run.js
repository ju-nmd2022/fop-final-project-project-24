import { Game } from "./TheGame.js";

let game;
let screen = 0;

function setup() {
  createCanvas(1000, 700);
  game = new Game();
  frameRate(30);
}
window.setup = setup;
let gameRunning = true;
let hasWon = false;

function draw() {
  clear();
  switch (screen) {
    case 0:
      loadImage("images/startingScreen.png");
      if (mouseIsPressed || keyIsDown(32) || keyIsDown(13)) {
        screen = 1;
      }
      break;
    case 1:
      console.log("hello");
      gameRunning = game.run();
      if (gameRunning.endGame) {
        screen = 2;
        hasWon = gameRunning.win;
      }

      break;
    case 2:
      if (hasWon === true) {
        loadImage("images/victoryScreen.png");
      }
      if (hasWon === false) {
        loadImage("images/gameOverScreen.png");
      }
      break;
  }
  // if (gameRunning === false) {
  //   return;
  //   }

  //   //   drawObstacleOne(180, 0)
}

window.draw = draw;
