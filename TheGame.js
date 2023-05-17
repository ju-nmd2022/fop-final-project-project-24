import { Cloud } from "./cloud";
import { Cloud1 } from "./cloud1";
import { Cloud2 } from "./cloud2";
import { Character } from "./character";
import { Bullet } from "./bullets";
import { Flash } from "./flash";

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
    this.endGame = false;
  }

  setUp() {
    this.flashes = [];
    this.bullets = [];
    this.endGame = false;
  }
  changeToOriginalColor() {
    this.character.color = "#EDC9AE";
  }

  //tady všechno co se hýbe
  run() {
    background(this.bg);

    // moving the character
    if (keyIsDown(39)) {
      this.character.x = this.character.x + this.character.speed;
      this.character.toRight(this.character.x, this.character.y);
    } else if (keyIsDown(37)) {
      this.character.x = this.character.x - this.character.speed;
      this.character.toLeft(this.character.x, this.character.y);
    } else {
      this.character.draw(this.character.x, this.character.y);
    }

    // bullets
    for (let i = 0; i < this.bullets.length; i++) {
      this.bullets[i].update();
      this.bullets[i].show();
    }

    if (keyIsDown(32) && !this.spacePressed) {
      this.bullets.push(new Bullet(this.character.x + 20, this.character.y));
      this.spacePressed = true;
    } else if (!keyIsDown(32)) {
      this.spacePressed = false;
    }

    //flashes
    //frameCount clears the canvas - chatGPT adviced that
    //flash and cloud
    if (this.randomNumber > 1 && frameCount % 30 === 0) {
      const newFlash = new Flash(this.cloud.x + 30, this.cloud.y - 270);
      this.flashes.push(newFlash);
    }

    //flash1 and cloud1
    if (this.randomNumber > 0 && frameCount % 60 === 0) {
      const newFlash = new Flash(this.cloud1.x - 60, this.cloud1.y - 150);
      this.flashes.push(newFlash);
    }

    //flash2 and cloud2
    if (this.randomNumber > 0 && frameCount % 45 === 0) {
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

    for (let i = 0; i < this.flashes.length; i++) {
      //detecting collisions
      if (typeof this.flashes[i].detectIntersection == "function") {
        //here goes the evaluated true/false from detectIntersection (each of the objects/obstacles has it implemented in their codes)
        let objectCollision = this.flashes[i].detectIntersection(
          this.character.collisionInfo()
        );
        if (objectCollision === true) {
          this.character.color = "#FF0000";
          //chat GPT helped edit setTimeout and added the arrow function -  to retain the proper 'this' context
          setTimeout(() => {
            this.changeToOriginalColor();
          }, 500);
          // this.endGame = true;
        }
      }
    }

    if (
      // this.character.x <= 200 || //má být 200
      // this.character.x >= 800 ||
      this.endGame === true
    ) {
      console.log("gameOver");
    }
  }
}
