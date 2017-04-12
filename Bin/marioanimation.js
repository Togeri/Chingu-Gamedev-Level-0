var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mario = document.getElementById("mario");


//Mario Variables

var marioX = 100;	//Mario's X-axis
var marioY = 300;	//Mario's Y-axis

var marioDX = 2;	//Mario's Movement-Ratio in X-Axis
var marioDY;		//Mario's Movement-Ratio in Y-Axis


//Spritesheet Variables

var frameWidth = 16;
var frameHeight = 16;

var framePosition = 64;		//Default Standing Mario
var frameSprite = 0;		//Sprite that is going to get printed


//Mario Movement Variables

var direction = 1; 	// 1 for right, -1 for left
//var moving = false;


//Key Event Variables

var rightPressed = false;
var leftPressed = false;

function drawMario()	{
	ctx.beginPath();
	

	ctx.drawImage(mario, framePosition, 0, frameWidth, frameHeight, marioX, marioY, 22, 22);
	
	ctx.closePath();
}

function marioWalk(){
	if(rightPressed && direction == 1)	{
		framePosition = 80 + (16 * Math.floor((frameSprite % 3)));
		frameSprite+= 0.2;
	}
	else if(leftPressed && direction == -1)	{
		framePosition = 32 - (16 * Math.floor((frameSprite % 3)));
		frameSprite+= 0.2;
	}
	else   {
		if (direction == 1) {
		framePosition = 64;
		}
		if(direction == -1){
			framePosition = 48;
		}
	}
	

}



function moveMario()	{

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	drawMario();		//Drawing Mario on Canvas
	marioWalk();		//Mario Walking Animation

	//Mario Moving Logic

	if(rightPressed)	{
		marioX += marioDX;
		moving = true;
		direction = 1;

	}
	else if(leftPressed)	{
		marioX -= marioDX;
		direction = -1;
		moving = true;
	}
	/*else {
		moving = false;
	}*/

	requestAnimationFrame(moveMario);

}




//Keyboard Events

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


//Key Down Event Function

function keyDownHandler(e) {						

    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

//Key Up Event Function

function keyUpHandler(e) {							

    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}



moveMario();
