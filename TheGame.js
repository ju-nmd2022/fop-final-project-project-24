import { Cloud } from "./cloud";
import { Cloud1 } from "./cloud1";
import { Cloud2 } from "./cloud2";
import { Character } from "./character";
import { Bullet } from "./bullets";
import { Flash } from "./flash";

let a = 100;
let b = 100;

let gameIsOn = true;

export class Game {
  constructor() {
    this.flashes = [];
    this.bullets = [];
    this.setUp();
    this.cloud = new Cloud(0, 0);
    this.cloud1 = new Cloud1(0, 0); //100, 0
    this.cloud2 = new Cloud2(0, 0); //250, 0
    this.character = new Character(450, 430); //450, 430
    // //flash for cloud
    // this.flash = new Flash(this.cloud.x, this.cloud.y);

    this.bg = loadImage("images/gameBackground.png");
    this.randomNumber = Math.floor(Math.random() * 4); //between 0 and 3
  }

  setUp() {
    this.flashes = [];
    this.bullets = [];
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
    for (let i = 0; i < this.bullets.length; i++) {
      this.bullets[i].update();
      this.bullets[i].show();
    }

    if (key === " " || key === "Spacebar") {
      this.bullets.push(new Bullet(a + 292, b + 650));
    }
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      //this line messes it up! How to edit?
      this.bullets.speed = 5;
    }

    //flashes
    //frameCount clears the canvas - chatGPT adviced that
    //flash and cloud
    if (this.randomNumber > 1 && frameCount % 30 === 0) {
      console.log("flash");
      const newFlash = new Flash(this.cloud.x + 30, this.cloud.y - 270);
      this.flashes.push(newFlash);
    }

    //flash1 and cloud1
    if (this.randomNumber > 0 && frameCount % 60 === 0) {
      console.log("flash");
      const newFlash = new Flash(this.cloud1.x - 60, this.cloud1.y - 150);
      this.flashes.push(newFlash);
    }

    //flash2 and cloud2
    if (this.randomNumber > 0 && frameCount % 45 === 0) {
      console.log("flash");
      const newFlash = new Flash(this.cloud2.x + 200, this.cloud2.y - 200);
      this.flashes.push(newFlash);
    }

    //following 10 lines were created with chatGPT
    // update and draw flashes
    for (let i = this.flashes.length - 1; i >= 0; i--) {
      const flash = this.flashes[i];
      //in the loop there's the method update() which updates only the y position of a flash
      //thanks to that the initial x position stays (bc its not here)
      //and only the y position is changing
      flash.update();
      flash.draw();
      if (flash.y > height) {
        // remove flash from array if it falls off the screen
        this.flashes.splice(i, 1);
      }
    }
    // clouds
    this.cloud.draw();
    this.cloud1.draw();
    this.cloud2.draw();

    // }
    // for (let i = 0; i < this.flashes.length; i++) {
    //   let currentFlash = this.flashes[i];
    //   currentFlash.draw();
    //   currentFlash.update();
    // }

    // if (this.randomNumber < 3) {
    //   this.flash1.draw();
    // }

    // if (this.randomNumber > 3 && this.randomNumber < 7) {
    //   this.flash2.draw();
    // }

    //tady jsem pro teď skončila
  }
}
