import { Cloud } from "./cloud.js";
import { Cloud1 } from "./cloud1.js";
import { Cloud2 } from "./cloud2.js";
import { Character } from "./character.js";
import { Bullet } from "./bullets.js";
import { Flash } from "./flash.js";

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
    this.bg = loadImage("images/gameBackground2.png");
    this.randomNumber = Math.floor(Math.random() * 4); //between 0 and 3
    this.endGame = false;
    this.flashCount = 0; // Counter to keep track of flash hits
  }

  setUp() {
    this.flashes = [];
    this.bullets = [];
    this.endGame = false;
    this.flashCount = 0; // Reset the flash hit counter
  }
  changeToOriginalColor() {
    this.character.color = "#EDC9AE";
  }

  //tady všechno co se hýbe
  run() {
    background(this.bg);

    // moving the character
    if (this.character.x < 720 && this.character.x > 80) {
      if (keyIsDown(39)) {
        this.character.x = this.character.x + this.character.speed;
        this.character.toRight(this.character.x, this.character.y);
      } else if (keyIsDown(37)) {
        this.character.x = this.character.x - this.character.speed;
        this.character.toLeft(this.character.x, this.character.y);
      } else {
          this.character.draw(this.character.x, this.character.y);
        }
    }
   

    // bullets
    for (let i = 0; i < this.bullets.length; i++) {
      this.bullets[i].update();
      this.bullets[i].show();
    }

    if (keyIsDown(32) && !this.spacePressed) {
      this.bullets.push(
        new Bullet(this.character.x + 95, this.character.y + 120)
      );
      this.spacePressed = true;
    } else if (!keyIsDown(32)) {
      this.spacePressed = false;
    }

    //flashes
    //frameCount clears the canvas - chatGPT adviced that
    //flash and cloud
    if (this.randomNumber > 1 && frameCount % 30 === 0) {
      const newFlash = new Flash(this.cloud.x + 120, this.cloud.y); //+ 30, -270
      this.flashes.push(newFlash);
    }

    //flash1 and cloud1
    if (this.randomNumber > 0 && frameCount % 60 === 0) {
      const newFlash = new Flash(this.cloud1.x + 40, this.cloud1.y + 150);
      this.flashes.push(newFlash);
    }

    //flash2 and cloud2
    if (this.randomNumber > 0 && frameCount % 45 === 0) {
      const newFlash = new Flash(this.cloud2.x + 280, this.cloud2.y + 80);
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
      if (typeof this.flashes[i].detectIntersection === "function") {
        let objectCollision = this.flashes[i].detectIntersection(
          this.character.collisionInfo()
        );
        if (objectCollision === true) {
          this.character.color = "#FF0000";
          setTimeout(() => {
            this.changeToOriginalColor();
          }, 500);
          this.flashCount++; // Increase the flash hit count
          if (this.flashCount === 30) {
            this.endGame = true; // Set the endGame flag to true
            console.log("Game over");
          }
        }
      }
    }

    //mrak je jako character
    //cloud
    for (let i = 0; i < this.bullets.length; i++) {
      //detecting collisions
      if (typeof this.bullets[i].detectIntersection == "function") {
        let cloudCollision = this.bullets[i].detectIntersection(
          this.cloud.collisionInfo()
        );
        if (cloudCollision === true) {
          this.cloud.hitValue += 1; //but 1 bullet actually adds 3, not 1
          console.log(this.cloud.hitValue);
        }
        if (this.cloud.hitValue >= 3) {
          this.cloud.color = "#18D4E5";
        }
        if (this.cloud.hitValue >= 6) {
          this.cloud.color = "#18D1DF";
        }
        if (this.cloud.hitValue >= 9) {
          this.cloud.color = "#18CED9";
        }
        if (this.cloud.hitValue === 12) {
          this.cloud.color = "#18CAD2";
        }
        if (this.cloud.hitValue === 15) {
          this.cloud.color = "#18C7CC";
        }
        if (this.cloud.hitValue === 18) {
          this.cloud.color = "#18C4C6";
        }
        if (this.cloud.hitValue === 21) {
          this.cloud.color = "#18C1C0";
        }
        if (this.cloud.hitValue === 24) {
          this.cloud.color = "#18BDB9";
        }
        if (this.cloud.hitValue === 27) {
          this.cloud.color = "#7080C1";
        }
        if (this.cloud.hitValue >= 30) {
          this.cloud.color = "#100841";
        }
      }
    }

    //cloud1
    for (let i = 0; i < this.bullets.length; i++) {
      //detecting collisions
      if (typeof this.bullets[i].detectIntersection == "function") {
        let cloud1Collision = this.bullets[i].detectIntersection(
          this.cloud1.collisionInfo()
        );
        if (cloud1Collision === true) {
          this.cloud1.hitValue += 1;
        }
        if (this.cloud1.hitValue >= 3) {
          this.cloud1.color = "#18D4E5";
        }
        if (this.cloud1.hitValue >= 6) {
          this.cloud1.color = "#18D1DF";
        }
        if (this.cloud1.hitValue >= 9) {
          this.cloud1.color = "#18CED9";
        }
        if (this.cloud1.hitValue === 12) {
          this.cloud1.color = "#18CAD2";
        }
        if (this.cloud1.hitValue === 15) {
          this.cloud1.color = "#18C7CC";
        }
        if (this.cloud1.hitValue === 18) {
          this.cloud1.color = "#18C4C6";
        }
        if (this.cloud1.hitValue === 21) {
          this.cloud1.color = "#18C1C0";
        }
        if (this.cloud1.hitValue === 24) {
          this.cloud1.color = "#18BDB9";
        }
        if (this.cloud1.hitValue === 27) {
          this.cloud1.color = "#7080C1";
        }
        if (this.cloud1.hitValue >= 30) {
          this.cloud1.color = "#100841";
        }
      }
    }

    //cloud2
    for (let i = 0; i < this.bullets.length; i++) {
      //detecting collisions
      if (typeof this.bullets[i].detectIntersection == "function") {
        let cloud2Collision = this.bullets[i].detectIntersection(
          this.cloud2.collisionInfo()
        );
        if (cloud2Collision === true) {
          this.cloud2.hitValue += 1;
        }
        if (this.cloud2.hitValue >= 3) {
          this.cloud2.color = "#18D4E5";
        }
        if (this.cloud2.hitValue >= 6) {
          this.cloud2.color = "#18D1DF";
        }
        if (this.cloud2.hitValue >= 9) {
          this.cloud2.color = "#18CED9";
        }
        if (this.cloud2.hitValue === 12) {
          this.cloud2.color = "#18CAD2";
        }
        if (this.cloud2.hitValue === 15) {
          this.cloud2.color = "#18C7CC";
        }
        if (this.cloud2.hitValue === 18) {
          this.cloud2.color = "#18C4C6";
        }
        if (this.cloud2.hitValue === 21) {
          this.cloud2.color = "#18C1C0";
        }
        if (this.cloud2.hitValue === 24) {
          this.cloud2.color = "#18BDB9";
        }
        if (this.cloud2.hitValue === 27) {
          this.cloud2.color = "#7080C1";
        }
        if (this.cloud2.hitValue >= 30) {
          this.cloud2.color = "#100841";
        }
      }
    }

    //conditions to end the game
    if (
      this.cloud.hitValue >= 30 &&
      this.cloud1.hitValue >= 30 &&
      this.cloud2.hitValue >= 30
    ) { 
      this.endGame = true;
    }

   
    if (this.character.x <= 90 || this.character.x >= 720) {
      this.character.y += 10; // Increase the character's y coordinate to make it fall
      this.character.gameOver();
      this.character.color = "#FF0000";
      this.endGame = true; // Set the endGame flag to true or handle the game over logic 
      console.log("Game over");
    }
  
    // Check if the character has fallen off the screen
    if (this.character.y > height) {
      this.endGame = true; // Set the endGame flag to true or handle the game over logic 
      console.log("Game over");
    }
  }
}

