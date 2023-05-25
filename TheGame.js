import { Cloud } from "./cloud.js";
import { Cloud1 } from "./cloud1.js";
import { Cloud2 } from "./cloud2.js";
import { Character } from "./character.js";
import { Bullet } from "./bullets.js";
import { Flash } from "./flash.js";

const heartImages = document.getElementsByClassName('heart');

export class Game {
  constructor() {
    this.flashes = [];
    this.bullets = [];
    this.setUp();
    this.cloud = new Cloud(0, 0);
    this.cloud1 = new Cloud1(0, 0); //100, 0
    this.cloud2 = new Cloud2(0, 0); //250, 0
    this.character = new Character(450, 430); //450, 430
    this.bg = loadImage("images/gameBackground.png");
    this.randomNumber = Math.floor(Math.random() * 4); //between 0 and 3
    this.endGame = false;
    this.flashCount = 0; // Counter to keep track of flash hits
    this.win = false;

    this.heartCount = 3;
    this.flashHit = 3;

    this.flashCanKeepFalling = true;
    this.flash1CanKeepFalling = true;
    this.flash2CanKeepFalling = true;
  }

  setUp() {
    this.flashes = [];
    this.bullets = [];
    this.endGame = false;
    this.flashCount = 0; // Reset the flash hit counter
    this.resetHearts();
  }
  changeToOriginalColor() {
    this.character.color = "#EDC9AE";
  }

 // folowwong lines chatGPT 
  resetHearts() {
    this.heartCount = 3; // Reset the heart count to its initial value
  
    // Update the heart images on the screen to show full hearts
    for (let i = 0; i < heartImages.length; i++) {
      heartImages[i].src = "images/heart.png";
      heartImages[i].style.width = "50px";
    }
  }

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

    //flashes
    //frameCount clears the canvas - chatGPT adviced that
    //flash and cloud
    if (
      this.randomNumber > 1 &&
      frameCount % 30 === 0 &&
      this.flashCanKeepFalling === true
    ) {
      const newFlash = new Flash(this.cloud.x + 120, this.cloud.y); //+ 30, -270
      this.flashes.push(newFlash);
    }

    //flash1 and cloud1
    if (
      this.randomNumber > 0 &&
      frameCount % 60 === 0 &&
      this.flash1CanKeepFalling === true
    ) {
      const newFlash = new Flash(this.cloud1.x + 40, this.cloud1.y + 150);
      this.flashes.push(newFlash);
    }

    //flash2 and cloud2
    if (
      this.randomNumber > 0 &&
      frameCount % 45 === 0 &&
      this.flash2CanKeepFalling === true
    ) {
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

    
// following lines were done with a help of Garrit
    for (let i = 0; i < this.flashes.length; i++) {
      if (typeof this.flashes[i].detectIntersection === "function") {
        let objectCollision = this.flashes[i].detectIntersection(
          this.character.collisionInfo()
        );
        if (objectCollision === true &&  this.flashes[i].flashHit === false) {
          this.flashes[i].flashHit = true;
          this.character.color = "#FF0000";
          setTimeout(() => {
            this.changeToOriginalColor();
          }, 500);
          this.flashCount++; // Increase the flash hit count
          if (this.flashCount === 1) {
            this.heartCount -= 3;
            heartImages[0].src = "images/emptyheart1.png";
            heartImages[0].style.width = "35px";
            console.log("au");
          } else if (this.flashCount === 2) {
            this.heartCount -= 2;
            heartImages[1].src = "images/emptyheart1.png" ;
            heartImages[1].style.width = "35px";
            console.log("ouch");
          } else if (this.flashCount === 3) {
           console.log("GAME OVER");
           heartImages[2].src = "images/emptyheart1.png";
           heartImages[2].style.width = "35px";
            this.endGame = true;
            return {
              endGame: true,
              win: false,
            };
          }
        }
      }
    }
  

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
          this.cloud.color = "#dddddd";
        }
        if (this.cloud.hitValue >= 9) {
          this.cloud.color = "#18CED9";
        }
        if (this.cloud.hitValue === 12) {
          this.cloud.color = "#dddddd";
        }
        if (this.cloud.hitValue === 15) {
          this.cloud.color = "#18C7CC";
        }
        if (this.cloud.hitValue === 18) {
          this.cloud.color = "#dddddd";
        }
        if (this.cloud.hitValue === 21) {
          this.cloud.color = "#18C1C0";
        }
        if (this.cloud.hitValue === 24) {
          this.cloud.color = "#dddddd";
        }
        if (this.cloud.hitValue === 27) {
          this.cloud.color = "#7080C1";
        }
        if (this.cloud.hitValue >= 30) {
          this.cloud.color = "#100841";
          this.flashCanKeepFalling = false;
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
          this.cloud1.color = "#dddddd";
        }
        if (this.cloud1.hitValue >= 9) {
          this.cloud1.color = "#18CED9";
        }
        if (this.cloud1.hitValue === 12) {
          this.cloud1.color = "#dddddd";
        }
        if (this.cloud1.hitValue === 15) {
          this.cloud1.color = "#18C7CC";
        }
        if (this.cloud1.hitValue === 18) {
          this.cloud1.color = "#dddddd";
        }
        if (this.cloud1.hitValue === 21) {
          this.cloud1.color = "#18C1C0";
        }
        if (this.cloud1.hitValue === 24) {
          this.cloud1.color = "#dddddd";
        }
        if (this.cloud1.hitValue === 27) {
          this.cloud1.color = "#7080C1";
        }
        if (this.cloud1.hitValue >= 30) {
          this.cloud1.color = "#100841";
          this.flash1CanKeepFalling = false;
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
          this.cloud2.color = "#dddddd";
        }
        if (this.cloud2.hitValue >= 9) {
          this.cloud2.color = "#18CED9";
        }
        if (this.cloud2.hitValue === 12) {
          this.cloud2.color = "#dddddd";
        }
        if (this.cloud2.hitValue === 15) {
          this.cloud2.color = "#18C7CC";
        }
        if (this.cloud2.hitValue === 18) {
          this.cloud2.color = "#dddddd";
        }
        if (this.cloud2.hitValue === 21) {
          this.cloud2.color = "#18C1C0";
        }
        if (this.cloud2.hitValue === 24) {
          this.cloud2.color = "#dddddd";
        }
        if (this.cloud2.hitValue === 27) {
          this.cloud2.color = "#7080C1";
        }
        if (this.cloud2.hitValue >= 30) {
          this.cloud2.color = "#100841";
          this.flash2CanKeepFalling = false;
        }
      }
    }

    // following 12 lines done with the help of chatGPT
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

    //conditions to win the game
    if (
      this.cloud.hitValue >= 30 &&
      this.cloud1.hitValue >= 30 &&
      this.cloud2.hitValue >= 30
    ) {
      return {
        endGame: true,
        win: true,
      };
    }

    //conditions to loose the game
    if (
      this.character.x <= 90 ||
      this.character.x >= 720 ||
      this.flashCount === 30
    ) {
      if (this.character.y < 600) {
        this.character.y += 10; // Increase the character's y coordinate to make it fall
        this.heartCount -= 3;
            heartImages[0].src = "images/emptyheart1.png";
            heartImages[0].style.width = "35px";
            this.heartCount -= 2;
            heartImages[1].src = "images/emptyheart1.png" ;
            heartImages[1].style.width = "35px";
            this.heartCount -= 3;
            heartImages[2].src = "images/emptyheart1.png" ;
            heartImages[2].style.width = "35px";
        this.character.gameOver();
        this.character.color = "#FF0000";
      } else {
        return {
          endGame: true,
          win: false,
        };
      }
    }
    return {
      endGame: false,
    };
  }
}
