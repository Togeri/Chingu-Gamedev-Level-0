//TODO sprite mechanics with these sprites
var mario = images[1]


//Key Event Variables
var rightPressed = false, leftPressed = false, upPressed = false;

//World variables for Mario
var gravity = 0.4;

//Mario Variables
//X and Y position of Mario
var marioX = 0, marioY = tileSize * 13, startPositionY = marioY;
//Horizontal and vertical velocities
var marioDX = 5, marioDY = 0.0;
//Mario Movement Variables
var direction = 1; 	// 1 for right, -1 for left
//Mario states
var onGround = false;

//Sprites sheet Variables
var spriteWidth = 14, spriteHeight = 14;
var framePositionX = 81, framePositionY = 34;		//Default position of standing Mario
var frameSprite = 0;


function marioDraw(){
    c.drawImage(mario, framePositionX, framePositionY, spriteWidth, spriteHeight, marioX, marioY, tileSize, tileSize);
}



//Sprites mechanics
function marioSprite(){
	if(rightPressed && direction == 1){
		framePosition = 80 + (16 * Math.floor((frameSprite % 3)));
		frameSprite+= 0.1;
	}
	else if(leftPressed && direction == -1){
		framePosition = 32 - (16 * Math.floor((frameSprite % 3)));
		frameSprite+= 0.2;
	}
	else{
		if (direction == 1) {
		framePosition = 64;
		}
		if(direction == -1){
			framePosition = 48;
		}
	}
}

//Updates the actual position of Mario
function marioMove()	{
	if(rightPressed)	{
		marioX += marioDX;
		direction = 1;
	}
	if(leftPressed)	{
		marioX -= marioDX;
		direction = -1;
	}
	if(upPressed) {
		startJump();
	}

	marioDY += gravity;
    marioY += marioDY;
    
    if(marioY > startPositionY) {
        marioY = startPositionY;
        marioDY = 0.0;
        onGround = true;
    }
}

//Jumping
function startJump(){
	if (onGround){
		marioDY = -12.0;
		onGround = false;
	}
}

function endJump(){
    if(marioDY < -6.0)
        marioDY = -6.0;
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
    else if(e.keyCode == 38) {
    	upPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode == 38) {
    	upPressed = false;
    	endJump();
    }
}