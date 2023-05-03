let a = 100;
let b = 100;
let speed = 5;
let bullets = [];
let x = 0;
let y = 0;
let z = 0;
let l = 0;
let gameIsOn = true;
let direction = 1;
let speed1 = 3;
let speed2 = 4; 

function setup() {
  createCanvas(700, 700);
}
 
function preload() {
  bg = loadImage("gameBackground.png");  
}

// clouds 
function cloud(x, y) {
    strokeWeight(20);    
    stroke("#18d4eb"); 
    //cloud 1
    fill(24, 212, 235);
    line(x + 100, y + 50, x + 220, y + 50);
    line(x + 173, y + 50, x + 173, y + 70);
    line(x + 123, y + 75, x + 200, y + 75);
  }
  
  function cloud1 (l, y) {
    fill(255, 0, 0);
    line(l + 36, y + 205, l + 120, y + 205);
    line(l + 51, y + 190, l + 51, y + 190); 
    line(l , y + 180, l + 75, y + 180);
  }
  
  function cloud2 (z,y){ 
    line(z + 250, y + 145, z + 370, y + 145);
    line(z + 303, y + 130, z + 303, y + 120);
    line(z + 265, y + 120, z + 340, y + 120);
  } 

  function movement(a, b){
    if (keyIsDown(39)){
        push();
        scale(0.5);
    noStroke();
    fill(237, 201, 174);
    ellipse(a+450, b+300, 33, 45);
    
    rect(a+445, b+315, 12, 20);
    strokeWeight(37);
    stroke(237, 201, 174); 
    line(a+451, b+347, a+451, b+410); 
    
    strokeWeight(20);
    rect(a+449, b+413, 1, 75);
    line(a+459, b+417, a+500, b+482);
    strokeWeight(18);
    line(a+500, b+485, a+510, b+480);
    line(a+448, b+495, a+467, b+495);
    line(a+449, b+393, a+508, b+346);
    
    noStroke();
    fill("#1f456e"); 
    ellipse(a+450, b+299, 27, 37); 
    fill(255, 255, 255);
    ellipse(a+450, b+299, 22, 30); 
    fill("#3944bc");
    ellipse(a+450, b+299, 20, 27);
    fill("#281e5d");
    ellipse(a+450, b+299, 18, 20);
    fill("#63c5da");
    ellipse(a+450, b+299, 12, 15);
    fill("#151e3d");
    ellipse(a+450, b+299, 10, 12);
    fill(255, 255, 255);
    ellipse(a+450, b+299, 7, 10);
    fill("#2c3e4c");
    ellipse(a+450, b+299, 5, 7);

    fill(0,0,0);
    rect(a+500, b+335, 10, 20);
    rect(a+500, b+335, 25, 10); 
    pop();
    }
    if (keyIsDown(37)){
        push();
        scale(0.5);
        stroke(237, 201, 174); 
        fill(237, 201, 174); 
        noStroke();
        ellipse(a+640, b+300, 33, 45); 
        
        rect(a+635, b+315, 12, 20);
        strokeWeight(37);
        stroke(237, 201, 174); 
        line(a+640, b+347,a+640, b+410); 
         
        strokeWeight(20);
        rect(a+640, b+413, 1, 75);
        line(a+633, b+411, a+595, b+470);
        strokeWeight(18);
        line(a+642, b+496, a+618, b+497);
        line(a+592,b+470, a+580,b+459);
        line(a+639, b+387, a+579, b+347);
       
        noStroke();
        fill("#1f456e");
        ellipse(a+640, b+299, 27, 37);
        fill(255, 255, 255);
        ellipse(a+640, b+299, 22, 30);
        fill("#3944bc");
        ellipse(a+640, b+299, 20, 27);
        fill("#281e5d");
        ellipse(a+640, b+299, 18, 20);
        fill("#63c5da");
        ellipse(a+640, b+299, 12, 15);
        fill("#151e3d");
        ellipse(a+640, b+299, 10, 12);
        fill(255, 255, 255);
        ellipse(a+640, b+299, 7, 10);
        fill("#2c3e4c");
        ellipse(a+640, b+299, 5, 7); 
        fill(0,0,0);
        rect(a+579, b+335, 10, 20);
        rect(a+567, b+335, 20, 10); 
        pop();
    }
  }

  function character(a,b){
    push();
    scale(0.5);
    fill(237, 201, 174);
    noStroke();
    ellipse(a + 292, b + 300, 37, 45);
  
    rect(a + 287, b + 315, 12, 20);
    rect(a + 269, b + 335, 50, 100);
    ellipse(a + 268, b + 373, 30, 80);
    ellipse(a + 318, b + 373, 30, 80);
  
    beginShape();
    vertex(a + 263, b + 334);
    vertex(a + 289, b + 325);
    vertex(a + 289, b + 336);
    endShape();  
  
    beginShape();
    vertex(a + 324,b + 335);
    vertex(a + 296,b+ 338);
    vertex(a+ 294, b+325);
    endShape();
  
    rect(a + 317, b + 384, 16, 35);
    rect(a + 254,b + 384, 22, 35);
  
    rect(a + 269, b + 433, 22, 70);
    rect(a + 297, b + 433, 22, 70);
    fill("#1f456e");
  ellipse(a+292, b+299, 32, 37);
  fill(255, 255, 255);
  ellipse(a+292, b+299, 28, 30);
  fill("#3944bc");
  ellipse(a+292, b+299, 22, 27);
  fill("#281e5d");
  ellipse(a+292, b+299, 18, 20);
  fill("#63c5da");
  ellipse(a+292, b+299, 12, 15);
  fill("#151e3d");
  ellipse(a+292, b+299, 10, 12);
  fill(255, 255, 255);
  ellipse(a+292, b+299, 7, 10);
  fill("#2c3e4c");
  ellipse(a+292, b+299, 5, 7);

  fill(0,0,0);
  rect(a+247, b+415, 20, 10);
  rect(a+247, b+422, 10, 20);
  pop(); 
    }

   

function draw() {
   background(bg);
  
  // Move character
  background(bg);
  if (keyIsDown(37)) {
    a = a - speed;
    movement(a-300,b+330);
  }else if (keyIsDown(39)) { 
    a = a + speed; 
    movement(a-200,b+330);    
} else {     
character(a,b+330);   
}     
if (gameIsOn) {
  x = x + speed1 * direction; 
  if (x >= 900 || x <= -800) {
    direction = -direction;
  }
}
cloud(x, y);
if (gameIsOn) { 
  l = l + speed2 * direction;
  if (l >= 900 || l <= -1) { 
    direction = -direction;
  } 
}
cloud1(l+100, y);
if (gameIsOn) {
  z = z - speed2 * direction;
  if (z <= -390 || z >= 500) {
    direction = -direction;
  } 
}
cloud2(z+250, y);

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].update();
    bullets[i].show(); 
  }
}

import * as Elements from "js/bullets.js";
 


function keyPressed() {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      speed = 5;
    }
  }
  
  function keyTyped() { 
    if (key === ' ' || key === 'Spacebar') {
      bullets.push(new Bullet(a + 292, b + 650));
    }
  }
  
 