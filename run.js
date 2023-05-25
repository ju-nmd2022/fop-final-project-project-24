import { Game } from "./TheGame.js";

let game;
let screen = 0;
let imgStart;
let imgWon;
let imgLost;

function preload() {
  imgStart = loadImage("images/startingScreen.png");
  imgWon = loadImage("images/victoryScreen.png");
  imgLost = loadImage("images/gameOverScreen.png");
}

function setup() {
  createCanvas(1000, 700);
  game = new Game();
  frameRate(30);

  // Add an event listener to the canvas element
  canvas.addEventListener("click", handleCanvasClick);
}

window.setup = setup;
let gameRunning = true;
let hasWon = false;

function handleCanvasClick() {
  if (screen === 0) {
    screen = 1;
  } else if (screen === 2) {
    resetGame();
    screen = 1; // Return to game screen instead of starting screen
  }
}

function resetGame() {
  game = new Game();
  gameRunning = true;
  hasWon = false;
}

function draw() {
  clear();
  switch (screen) {
    case 0:
      image(imgStart, 0, 0);
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
        image(imgWon, 0, 0);
      }
      if (hasWon === false) {
        image(imgLost, 0, 0);
      }
      break;
  }
}

window.draw = draw;
window.preload = preload;
