import { Game } from "./TheGame.js";

let game;

function setup() {
  createCanvas(1000, 700);
  game = new Game();
  frameRate(30);
}
window.setup = setup;
let gameRunning = true;

function draw() {
  // if (gameRunning === false) {
  //   return;
  //   }
  clear();
  //   //   drawObstacleOne(180, 0)
  gameRunning = game.run();
}

window.draw = draw;
