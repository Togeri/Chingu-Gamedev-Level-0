var mario = images[1]

//Mario Variables
//X and Y position of Mario
var marioX = 0, marioY = tileSize * 13;
var marioDX = 1;

//Sprites sheet Variables
var spriteWidth = 16, spriteHeight = 16;
var framePosition = 64;		//Default position of standing Mario
var frameSprite = 0;


function marioDraw(){
    c.drawImage(mario, framePosition, 0, spriteWidth, spriteHeight, marioX, marioY, canvas.height / 16, canvas.height / 16);
}

//Mario Movement Variables
var direction = 1; 	// 1 for right, -1 for left

//Key Event Variables
var rightPressed = false;
var leftPressed = false;

//Sprites mechanics
function marioSprite(){
	if(rightPressed && direction == 1)	{
		framePosition = 80 + (16 * Math.floor((frameSprite % 3)));
		frameSprite+= 0.1;
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

function marioMove()	{
	//Mario Moving Logic
	if(rightPressed)	{
		marioX += marioDX;
		direction = 1;
	}
	else if(leftPressed)	{
		marioX -= marioDX;
		direction = -1;
	}
}

//Keyboard Events
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}