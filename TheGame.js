import { Cloud } from "./cloud";
import { Cloud1 } from "./cloud1";
import { Cloud2 } from "./cloud2";
import { Character } from "./character";
import { Bullet } from "./bullets";

let a = 100;
let b = 100;

let gameIsOn = true;

export class Game {
  constructor() {
    this.flashes = [];
    // this.bullets = [];
    this.setUp();
    this.cloud = new Cloud(0, 0);
    this.cloud1 = new Cloud1(0, 0); //100, 0
    this.cloud2 = new Cloud2(0, 0); //250, 0
    this.character = new Character(450, 430); //450, 430
    this.bg = loadImage("images/gameBackground.png");
  }

  setUp() {
    this.flashes = [];
    // this.bullets = [];
  }
  run() {
    background(this.bg);

    // moving the character
    if (keyIsDown(39)) {
      this.character.x = this.character.x + this.character.speed;
      this.character.toRight(this.character.x - 200, this.character.y + 330);
    } else if (keyIsDown(37)) {
      this.character.x = this.character.x - this.character.speed;
      this.character.toLeft(this.character.x - 300, this.character.y + 330);
    } else {
      this.character.draw(this.character.x, this.character.y + 330);
    }

    // bullets
    // for (let i = 0; i < bullets.length; i++) {
    //   bullets[i].update();
    //   bullets[i].show();
    // }

    // clouds
    this.cloud.draw();
    this.cloud1.draw();
    this.cloud2.draw();
  }
  //tady jsem pro teď skončila
}

// import * as Elements from "bullets.js";

// function keyPressed() {
//   if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
//     speed = 5;
//   }
// }

// function keyTyped() {
//   if (key === " " || key === "Spacebar") {
//     bullets.push(new Bullet(a + 292, b + 650));
//   }
// }
