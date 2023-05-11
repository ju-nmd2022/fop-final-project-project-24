import { Game } from "./TheGame";

function setup() {
  createCanvas(1000, 700);
}

let game = new Game();
let gameRunning = true;

function draw() {
  //   if (gameRunning === false) {
  //     return;
  //   } 
  clear();
  //   //   drawObstacleOne(180, 0) 
  gameRunning = game.run();
} 
