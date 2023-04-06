background(0, 0, 0);

function character(x, y){ 
fill(237, 201, 174);
noStroke();
ellipse(x + 292, y + 300, 37, 45);

rect(x + 287, y + 315, 12, 20);
rect(x + 269, y + 335, 50, 100);
ellipse(x + 268, y + 373, 30, 80);
ellipse(x + 318, y + 373, 30, 80); 

beginShape();
vertex(x + 263, y + 334);
vertex(x + 289, y + 325);
vertex(x + 289, y + 336);
endShape();  

beginShape();
vertex(x + 324,y + 335);
vertex(x + 296,y+ 338);
vertex(x+ 294, y+325);
endShape();

rect(x+317, y+384, 16, 35);
rect(x+254,y+ 384, 22, 35);

rect(x+269, y+433, 22, 70);
rect(x+297, y+433, 22, 70);


fill("#1f456e");
ellipse(x+292, y+299, 32, 37);
fill(255, 255, 255);
ellipse(x+292, y+299, 28, 30);
fill("#3944bc");
ellipse(x+292, y+299, 22, 27);
fill("#281e5d");
ellipse(x+292, y+299, 18, 20);
fill("#63c5da");
ellipse(x+292, y+299, 12, 15);
fill("#151e3d");
ellipse(x+292, y+299, 10, 12);
fill(255, 255, 255);
ellipse(x+292, y+299, 7, 10);
fill("#2c3e4c");
ellipse(x+292, y+299, 5, 7);
}


function vpravo(x,y){
    fill(237, 201, 174);
    ellipse(x+450, y+300, 33, 45);
    
    rect(x+445, y+315, 12, 20);
    strokeWeight(37);
    stroke(237, 201, 174); 
    line(x+451, y+347, x+451, y+410);
    
    strokeWeight(20);
    rect(x+449, y+413, 1, 75);
    line(x+459, y+417, x+500, y+482);
    strokeWeight(18);
    line(x+500, y+485, x+510, y+480);
    line(x+448, y+495, x+467, y+495);
    line(x+449, y+393, x+508, y+346);
    
    noStroke();
    fill("#1f456e");
    ellipse(x+450, y+299, 27, 37);
    fill(255, 255, 255);
    ellipse(x+450, y+299, 22, 30);
    fill("#3944bc");
    ellipse(x+450, y+299, 20, 27);
    fill("#281e5d");
    ellipse(x+450, y+299, 18, 20);
    fill("#63c5da");
    ellipse(x+450, y+299, 12, 15);
    fill("#151e3d");
    ellipse(x+450, y+299, 10, 12);
    fill(255, 255, 255);
    ellipse(x+450, y+299, 7, 10);
    fill("#2c3e4c");
    ellipse(x+450, y+299, 5, 7);
}
  
    function vlavo(x,y){
        stroke(237, 201, 174); 
        fill(237, 201, 174); 
        noStroke();
        ellipse(x+640, y+300, 33, 45); 
        
        rect(x+635, y+315, 12, 20);
        strokeWeight(37);
        stroke(237, 201, 174); 
        line(x+640, y+347,x+640, y+410); 
         
        strokeWeight(20);
        rect(x+640, y+413, 1, 75);
        line(x+633, y+411, x+595, y+470);
        strokeWeight(18);
        line(x+642, y+496, x+618, y+497);
        line(x+592,y+470, x+580,y+459);
        line(x+639, y+387, x+579, y+347);
       
        noStroke();
        fill("#1f456e");
        ellipse(x+640, y+299, 27, 37);
        fill(255, 255, 255);
        ellipse(x+640, y+299, 22, 30);
        fill("#3944bc");
        ellipse(x+640, y+299, 20, 27);
        fill("#281e5d");
        ellipse(x+640, y+299, 18, 20);
        fill("#63c5da");
        ellipse(x+640, y+299, 12, 15);
        fill("#151e3d");
        ellipse(x+640, y+299, 10, 12);
        fill(255, 255, 255);
        ellipse(x+640, y+299, 7, 10);
        fill("#2c3e4c");
        ellipse(x+640, y+299, 5, 7);
        }

        const speed = 5;
        let x = 200;
        let y = 200;
        
        function draw() {
            character(x, y);
          if (keyIsDown(37)) {
            x = x - speed;
         } else if (keyIsDown(39)) {
            x = x + speed;
          }
          background(255, 0, 255);
          character(x, y);   
        }
        