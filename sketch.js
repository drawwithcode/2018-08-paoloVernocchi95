var img;
var img2;
var img3;
function preload(){
  // put preload code here
  img = loadImage("sfondo.jpg");
  img2 = loadImage("morte_nera.png");
  img3 = loadImage("millenium1.png");
  song = loadSound('Star Wars Millenium Falcon Theme.mp3');
}
var hit = false;
var balls = [];
var poly = [];
var poly2 = [];
var X_AXIS = 2;
var b1, b2, c1, c2;
var img;
var img2;
function setup() {
  createCanvas(windowWidth,windowHeight);
  textFont('Black Han Sans');
  textSize(25);
  textAlign(CENTER);
  angleMode(DEGREES);
  song.play();
  imageMode(CENTER);

  collideDebug(true)
  poly[0] = createVector(0,0);     // set X/Y position
  poly[1] = createVector(random(10,windowWidth/2),random(0, windowHeight/16) );
  poly[2] = createVector(random(10,windowWidth/2),random( windowHeight/16, windowHeight/16*2) );
  poly[3] = createVector(random(10,windowWidth/2),random( windowHeight/16*2, windowHeight/16*3) );
  poly[4] = createVector(random(10,windowWidth/2),random( windowHeight/16*3, windowHeight/16*4) );
  poly[5] = createVector(random(10,windowWidth/2),random( windowHeight/16*4, windowHeight/16*5) );
  poly[6] = createVector(random(10,windowWidth/2),random( windowHeight/16*5, windowHeight/16*6) );
  poly[7] = createVector(random(10,windowWidth/2),random( windowHeight/16*6, windowHeight/16*7) );
  poly[8] = createVector(random(10,windowWidth/2),random( windowHeight/16*7, windowHeight/16*8) );
  poly[9] = createVector(random(10,windowWidth/2),random( windowHeight/16*8, windowHeight/16*9) );
  poly[10] = createVector(random(10,windowWidth/2),random( windowHeight/16*9, windowHeight/16*10) );
  poly[11] = createVector(random(10,windowWidth/2),random( windowHeight/16*10, windowHeight/16*11) );
  poly[12] = createVector(random(10,windowWidth/2),random( windowHeight/16*11, windowHeight/16*12) );
  poly[13] = createVector(random(10,windowWidth/2),random( windowHeight/16*12, windowHeight/16*13) );
  poly[14] = createVector(random(10,windowWidth/2),random( windowHeight/16*13, windowHeight/16*14) );
  poly[15] = createVector(random(10,windowWidth/2),random( windowHeight/16*14, windowHeight/16*15) );
  poly[16] = createVector(random(10,windowWidth/2),random( windowHeight/16*15, windowHeight/16*16) );
    poly[16] = createVector(0,random( windowHeight/16*16, windowHeight/16*17));

    poly2[0] = createVector(windowHeight,0);     // set X/Y position
    poly2[1] = createVector(random( windowWidth/2,windowWidth ),random(0, windowHeight/16) );
    poly2[2] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16, windowHeight/16*2) );
    poly2[3] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*2, windowHeight/16*3) );
    poly2[4] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*3, windowHeight/16*4) );
    poly2[5] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*4, windowHeight/16*5) );
    poly2[6] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*5, windowHeight/16*6) );
    poly2[7] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*6, windowHeight/16*7) );
    poly2[8] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*7, windowHeight/16*8) );
    poly2[9] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*8, windowHeight/16*9) );
    poly2[10] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*9, windowHeight/16* 10) );
    poly2[11] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*10, windowHeight/16*11) );
    poly2[12] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*11, windowHeight/16*12) );
    poly2[13] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*12, windowHeight/16*13) );
    poly2[14] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*13, windowHeight/16*14) );
    poly2[15] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*14, windowHeight/16*15) );
    poly2[16] = createVector(random( windowWidth/2,windowWidth ),random( windowHeight/16*15, windowHeight/16*16) );
      poly2[16] = createVector(windowHeight,random( windowHeight/16*16, windowHeight/16*17));





}

function draw() {
/*for (var j = 0; j < balls.length; j++) {
  balls[j].move();
  balls[j].display();
}*/
/*  b1 = color(4,68,81);
  b1 = color(4,35,46);
setGradient(0, 0, width/2, height, b1, b2, X_AXIS);*/
background(4,68,81);
image(img, windowWidth/2, height/2, img.width, img.height);
rz= rotationZ;
rx= rotationX;
ry= rotationY;
stroke("#dc802c");
strokeWeight(3);
fill("#ea963c");
beginShape();
for(i=0; i < 17; i++){
  vertex(poly[i].x,poly[i].y);
}
endShape(CLOSE);
beginShape();
for(j=0; j < 17; j++){
  vertex(poly2[j].x,poly2[j].y);
}
endShape(CLOSE);
noStroke();

push();
//translate(windowWidth/2,windowHeight/2);
rotate(90);
//image(img,10*rx+windowWidth/2,-25*ry , img.width/25, img.height/25);
pop();
  ellipse (15*ry+windowWidth/2,30*rx+100,15);
  image(img3, 15*ry+windowWidth/2,30*rx+100, 20, 20);
  fill(255,255,255,0);
    ellipse(windowWidth/2,windowHeight -30,100);//morte nera
  image(img2,windowWidth/2,windowHeight -30, img.width/11, img.height/9);

  	hit2 = collideCircleCircle(15*ry+windowWidth/2,30*rx+100,15,windowWidth/2,windowHeight -30,75)
    hit3 = collideCirclePoly(10*ry+windowWidth/2,25*rx+100,15,poly)
    hit4 = collideCirclePoly(10*ry+windowWidth/2,25*rx+100,15,poly2)
if(hit2 == true){
  push();
    background(234,150,60,200);
  translate(windowWidth/2,windowHeight/2);
  rotate(90);
  fill(255);
  text("YOU WIN",0,0);
  text("REFRESH THE PAGE TO PLAY AGAIN ",0,30);
  print("colliding? " + hit);
  pop();
}
if(hit3 == true){
  push();
  background(4,35,46,200);
  translate(windowWidth/2,windowHeight/2);
  rotate(90);
  fill(255);
  text("GAME OVER",0,0);
  text("REFRESH THE PAGE TO PLAY AGAIN ",0,30);
  print("colliding? " + hit);
  pop();
}
if(hit4 == true){
  push();
  background(4,35,46,200);
  translate(windowWidth/2,windowHeight/2);
  rotate(90);
  fill(255);
  text("GAME OVER",0,0);
  text("REFRESH THE PAGE TO PLAY AGAIN ",0,30);
  print("colliding? " + hit);
  pop();
}


  text("DESTROY THE DEATH STAR",windowWidth/2,windowHeight/2-50);

}
/*if(this.overlap == false){ // prevent from scoreing id overlapped
			if(this.gate == false){ //debounce madness so only one point/hit gets added
				if(this.hit == true){
					this.score++
					this.gate = true;

					//quickly change the enemy's color to red for 100ms
					enemy.color = 'red'
					setTimeout(function(){
						enemy.color = enemy.saveColor;
					},100)
				}
			}
		}

		if(this.hit == false){
			this.gate = false;
		}
	}*/
