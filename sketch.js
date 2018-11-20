function preload(){
  // put preload code here
  img = loadImage('palloncino.png');
}
var hit = false;
var balls = [];
var poly = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  angleMode(DEGREES);
  collideDebug(true)
	poly[0] = createVector(123,231);     // set X/Y position
	poly[1] = createVector(10,111);
	poly[2] = createVector(20,23);
	poly[3] = createVector(390,33);
  /*var goodBall = new Ball(10, 10, 100);
  balls.push(goodBall);*/
}

function draw() {
background(255);
/*for (var j = 0; j < balls.length; j++) {
  balls[j].move();
  balls[j].display();
}*/
rz= rotationZ;
rx= rotationX;
ry= rotationY;
beginShape();
	for(i=0; i < poly.length; i++){
		vertex(poly[i].x,poly[i].y);
	}
	endShape(CLOSE);

push();
//translate(windowWidth/2,windowHeight/2);
rotate(90);
//image(img,10*rx+windowWidth/2,-25*ry , img.width/25, img.height/25);
pop();
	rect(200,200,windowWidth/2,windowHeight/2);
  ellipse (10*ry+windowWidth/2,25*rx+100,30);
	hit = collideRectCircle(200,200,100,150,10*ry+windowWidth/2,25*rx+100,30);
  ellipse(windowWidth/2,windowHeight -30,100,100);
  	hit2 = collideCircleCircle(10*ry+windowWidth/2,25*rx+100,30,windowWidth/2,windowHeight -30,100,100)
    hit3 = collideCirclePoly(10*ry+windowWidth/2,25*rx+100,30,poly);
  if(hit == true){
    		background(255,0,0,100);
        push();
        translate(windowWidth/2,windowHeight/2);
        rotate(90);
        fill(0);
    text("GAME OVER",0,0);
      text("REFRESH THE PAGE TO PLAY AGAIN ",0,30);
	print("colliding? " + hit);
  pop();
}
if(hit2 == true){
  push();
  translate(windowWidth/2,windowHeight/2);
  rotate(90);
  fill(0);
  text("YOU WIN",0,0);
  text("REFRESH THE PAGE TO PLAY AGAIN ",0,30);
  print("colliding? " + hit);
  pop();
}
if(hit3 == true){
  push();
  translate(windowWidth/2,windowHeight/2);
  rotate(90);
  fill(0);
  text("YOU WIN",0,0);
  text("REFRESH THE PAGE TO PLAY AGAIN ",0,30);
  print("colliding? " + hit);
  pop();
}




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
