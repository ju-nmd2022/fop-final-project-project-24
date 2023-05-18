import { Cloud } from "./cloud";
import { Cloud1 } from "./cloud1";
import { Cloud2 } from "./cloud2";
import { Character } from "./character";
import { Bullet } from "./bullets";
import { Flash } from "./flash";
import { Heart } from "./heart";

let gameIsOn = true;
let heartImage;

function preload() {
  heartImage = loadImage("images/heart.jpg");
}

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

    this.hearts = [];
    this.maxHearts = 3;

    // Create new heart instances and add them to the hearts array
    
    
  }
  createHearts() {
    const heartPositions = [
      { x: 100, y: 100 },
      { x: 200, y: 100 },
      { x: 300, y: 100 },
    ];

    for (let i = 0; i < this.maxHearts; i++) {
      const { x, y } = heartPositions[i];
      const heart = new Heart(x, y);
      this.hearts.push(heart);
    }
  }
  
  drawHearts() {
    for (let i = 0; i < this.hearts.length; i++) {
      this.hearts[i].display();
    }
  }


  setUp() {
    this.flashes = [];
    this.bullets = [];
    this.endGame = false;
    this.createHearts={};
  }
  changeToOriginalColor() {
    this.character.color = "#EDC9AE";
  }
  cloudChangeToOriginalColor() {
    this.cloud.color = "#18D4EB";
  }
  cloud1ChangeToOriginalColor() {
    this.cloud1.color = "#18D4EB";
  }
  cloud2ChangeToOriginalColor() {
    this.cloud2.color = "#18D4EB";
  }

  //tady všechno co se hýbe
  run() {
    this.drawHearts();
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

    //mrak je jako character
    //cloud
    for (let i = 0; i < this.bullets.length; i++) {
      //detecting collisions
      if (typeof this.bullets[i].detectIntersection == "function") {
        let cloudCollision = this.bullets[i].detectIntersection(
          this.cloud.collisionInfo()
        );
        if (cloudCollision === true) {
          console.log("Cloud was hit!");
          this.cloud.color = "#FF0000";
          setTimeout(() => {
            this.cloudChangeToOriginalColor();
          }, 500);
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
          console.log("Cloud was hit!");
          this.cloud1.color = "#FF0000";
          setTimeout(() => {
            this.cloud1ChangeToOriginalColor();
          }, 500);
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
          console.log("Cloud was hit!");
          this.cloud2.color = "#FF0000";
          setTimeout(() => {
            this.cloud2ChangeToOriginalColor();
          }, 500);
        }
      }
    }

    if (
      this.character.x <= 200 || //má být 200
      this.character.x >= 800 ||
      this.endGame === true
    ) {
      console.log("gameOver");
    }
    
  }
}



