"use strict";

var marioSprite;
 //var marioSprite = images[1]

//Mario Variables
var marioX = 100;	//Mario's X-axis
var marioY = tileSize * 13;	//Mario's Y-axis

var marioDX = 4;	//Mario's Movement-Ratio in X-Axis
var marioDY = 7;	//Mario's Movement-Ratio in Y-Axis


//Sprites sheet Variables
var frameWidth = 16;		//Sprite's Frame Width
var frameHeight = 16;		//Sprite's Frame Height

var frameXPosition = 210;		//Sprite Frame X Position - 210 = Default Standing Mario
var frameYPosition = 0;			//Sprite Frame Y Position 

var frameSprite = 0;		//Sprite "counter"  for animation


//Mario Movement Variables
var direction = 1; 	// 1 for right, -1 for left
var jumpCounter = 0;	//Mario's Jump Mechanics. The longer you hold the jump button, the higher Mario will rise, up to a limit
var jumpStatus = false;	//Jump status for sprite animation purposes
var moving = false;
var gameOverGravity = 0; 	//Gravity variable for Game Over Animation. It's separated from the other as Mario might face death on a Jump, and Gravity will have other value.
var gravity = 0;		//Gravity starts at 0, and will increment the longer Mario stays in air suspension, kind like acceleration over time
var jumpForce = 9;		//Force of Mario's jump


//Mario Status Variables
var marioSuspension = false;	//Status for Mario staying in air suspension
var marioLanded;				//Status for Mario being over something (use this for collision detection)
var running = false;			//Running status when pressing X on keyboard
var gameOver = false;


//Key Event Variables
//Buttons Pressed. Arrows: Right, Left, Up, Down. - Buttons: X key
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var bButtonPressed = false;




//Drawing Mario 
function marioDraw() {
	ctx.drawImage(marioSprite, frameXPosition, frameYPosition, frameWidth, frameHeight, marioX, marioY, tileSize, tileSize);
}


//Sprites mechanics

//Mario Animations


function marioAnimations() {

	//Mario Walk / Run Animations

	//Mario Running Animation Right
	if (rightPressed && direction == 1 && marioLanded && !bButtonPressed && !gameOver) {
		frameXPosition = 240 + (30 * Math.floor((frameSprite % 3)));
		frameSprite += 0.2;
		frameSprite %= 3;
	}

	//Mario Running Animation Left
	else if (rightPressed && direction == 1 && marioLanded && bButtonPressed && !gameOver) {
		frameXPosition = 240 + (30 * Math.floor((frameSprite % 3)));
		frameSprite += 0.4;
		frameSprite %= 3;
	}

	//Mario Walking Animation Right
	else if (leftPressed && direction == -1 && marioLanded && !bButtonPressed && !gameOver) {
		frameXPosition = 150 - (30 * Math.floor((frameSprite % 3)));
		frameSprite += 0.2;
		frameSprite %= 3;
	}

	//Mario Walking Animation Left
	else if (leftPressed && direction == -1 && marioLanded && bButtonPressed && !gameOver) {
		frameXPosition = 150 - (30 * Math.floor((frameSprite % 3)));
		frameSprite += 0.4;
		frameSprite %= 3;
	}

	//Mario Standing Animation. Right and Left.
	else {
		if (direction == 1) {
			frameXPosition = 210;
		}
		if (direction == -1) {
			frameXPosition = 180;
		}
	}


	//Mario Jump Animations

	//Jumping Right Animation. 
	if (upPressed && direction == 1 && marioLanded && !gameOver) {
		frameXPosition = 359;
	}

	//Jumping Left Animation. Triggering Jump Status
	if (upPressed && direction == -1 && marioLanded && !gameOver) {
		frameXPosition = 29;
	}

	//Mario Jump Animation once Jump has started 
	if (jumpStatus && direction == 1 && !gameOver) {
		frameXPosition = 359;
	}

	//Mario Jump Movement Left once Jump has started
	if (jumpStatus && direction == -1 && !gameOver) {
		frameXPosition = 29;
	}

	//Mario Game Over Animations

	if (gameOver) {
		frameXPosition = 0;
		frameYPosition = 16;
		gravity = 0;
		setTimeout(gameOverAnimation, 750);
		function gameOverAnimation() {
			marioY += (-(jumpForce + 3)) + gameOverGravity;
			gameOverGravity += 0.7;
		}

	}


}

//Mario Status

function marioStatus() {

	//Jump Status

	//Triggering Jump Status & Keeping Jump Counter
	if (upPressed && marioLanded && !gameOver) {

		jumpStatus = true;

		if (jumpCounter < 40) {
			jumpCounter++;
		}
	}

	//Actions Status

	//For dev purposes, 500 height will be the "floor"
	if (marioY >= tileSize * 13 && !gameOver) {

		jumpStatus = false;
		jumpCounter = 0;
		marioSuspension = false;
		marioLanded = true;
		gravity = 0;

	}
	else if (marioY < tileSize * 13 && !gameOver) {

		marioSuspension = true;
		marioLanded = false;
		gravity += 0.2;
	}

	//Mario B Button (B for Game Boy Color's B Button, although due to convention is X key on keyboard).
	//B Button Actions include Running and Dropping a Fire-Bomb once Mario has eaten enough Mushrooms.

	//B for Running
	if ((rightPressed || leftPressed) && marioLanded && bButtonPressed && !gameOver) {	//Running
		running = true;
	}
	else if ((rightPressed || leftPressed) && marioLanded && !bButtonPressed && !gameOver) {	//Stop Running
		running = false;
	}

	//Mario Game Over

	//Triggering Game Over Animation when MarioX == 700 for Dev purposes
	if (marioX >= 700) {
		gameOver = true;
	}

}



//Mario Movement

function marioMoving() {

	//Mario Jumping Movement. Jump Initial Move (with no gravity effect) 
	if (upPressed && marioLanded && !gameOver) {
		marioY -= jumpForce;
	}


	//Mario Falling Movement

	//Falling Movement with Jump interaction. The longer we keep the jump button pressed, the higher Mario rises, up to a limit
	if (marioSuspension && upPressed && !gameOver) {
		if (jumpCounter < 40) {
			marioY += (-jumpForce) + gravity;
		}
		else if (jumpCounter >= 40) {
			marioY += 8;
		}

	}
	//Falling Movement if Mario simply falls of a cliff without jumping.
	else if (marioSuspension && !gameOver) {
		marioY += 8;
	}

	//Mario Moving Logic

	//Walking

	if (rightPressed && !running && !gameOver) {		//Walking Right
		marioX += marioDX;
		moving = true;
		direction = 1;

	}
	else if (leftPressed && !running && !gameOver) {	//Walking Left
		marioX -= marioDX;
		direction = -1;
		moving = true;
	}

	//Running

	if (rightPressed && running && !gameOver) {		//Running Right
		marioX += marioDX * 2;
		moving = true;
		direction = 1;

	}


	else if (leftPressed && running && !gameOver) {	//Running Left
		marioX -= marioDX * 2;
		direction = -1;
		moving = true;
	}
}




//Keyboard Events
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


//Key Down Event Function
function keyDownHandler(e) {

	if (e.keyCode == 39) {
		rightPressed = true;
	}
	else if (e.keyCode == 37) {
		leftPressed = true;
	}

	else if (e.keyCode == 38) {
		upPressed = true;
	}

	else if (e.keyCode == 88) {
		bButtonPressed = true;
	}

	else if (e.keyCode == 40) {
		downPressed = true;
	}

}

//Key Up Event Function
function keyUpHandler(e) {

	if (e.keyCode == 39) {
		rightPressed = false;
	}

	else if (e.keyCode == 37) {
		leftPressed = false;
	}

	else if (e.keyCode == 38) {
		upPressed = false;
	}

	else if (e.keyCode == 88) {
		bButtonPressed = false;
	}

	else if (e.keyCode == 40) {
		downPressed = false;
	}

}