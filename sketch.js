var angle = 0;
var offset = 150;
//how much to scale up from sin:
//this makes the wave bigger or smaller
var scalar = 100;
var speed = 0.01;
var redValue=0;
var blueValue=0;
var greenValue=0;
function setup() {
    createCanvas(900, 600);
    fill(0);
     background(255);
   
}

function draw() {
    
    var redValue=0;
var blueValue=0;
var greenValue=0;
var color = random(800);
    
    var y1 = offset + sin(angle) * scalar;
    var y2 = offset + sin(angle + 0.4) * scalar;
    var y3 = offset + sin(angle + 0.8) * scalar;
    
    fill(255,255,204,8);
    ellipse(color, mouseY, mouseX, mouseY);
    
     fill(204,255,255,2);
    noStroke();
    ellipse(255, color, mouseX,89);
   
    
    
     fill(255,204,204,10);
    ellipse(mouseX,color, 180, 180);
    
    fill(204,255,255,9);
    noStroke();
    ellipse(255, y2, mouseX,89);
   

    angle += speed;
if (mouseIsPressed == false) {
       
        
        
    } else {
        background(255);
        fill(255);
    }



}
