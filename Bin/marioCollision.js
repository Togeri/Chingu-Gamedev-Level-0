'use strict';
var marioArrayPosY;
var marioArrayPosX;

var testOfCollision = function () {
  marioArrayPosY = Math.floor(marioY / tileSize); // calculate Y row in map array
  marioArrayPosX = Math.floor((mapOffsetX + marioX + (tileSize / 2)) / tileSize); // calculate X column in map array

  // those tails are invisible for Mario
  var backgroundTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16, 17, 18, 22, 23, 24, 25, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];

  // mario can walk on top of those tails elements and have a collision with them 
  var obstaclesTiles = [12, 13, 14, 15, 19, 20, 21, 26, 27, 30, 47, 'questionMarkOFF'];


  // if mario is jumping to hight OR tile above his head is comming from "obstaclesTiles" array take him down with gravity
  if ( (jumpStatus && marioY-4 <= 0) || ( jumpStatus && backgroundTiles.indexOf(map[Math.floor(marioY / tileSize)][marioArrayPosX]) === -1)) {
    gravity = 10;
  }

  // check if tile under Mario is comming from 'obstaclesTiles' array, if so - stay on that Y pos.
  if ((marioY + tileSize) < tileSize * 16
    // && map[Math.floor((marioY + tileSize) / tileSize)][marioArrayPosX] !== 1 ) {
    && obstaclesTiles.indexOf(map[Math.floor((marioY + tileSize) / tileSize)][marioArrayPosX]) !== -1) {

    marioY = tileSize * marioArrayPosY; //  stay on that Y pos.
    jumpStatus = false;
    jumpCounter = 0;
    marioSuspension = false;
    marioLanded = true;
    gravity = 0;

  } else {
    jumpStatus = true;
    jumpCounter = 0;
    marioSuspension = false;
    marioLanded = false;
  }


  // if mario want to go thru the objects or out of canvas in X axel - stop him
  if (direction === 1
    && obstaclesTiles.indexOf(map[marioArrayPosY][Math.floor((mapOffsetX + marioX + tileSize + 1) / tileSize)]) !== -1) {

    marioDX = 0;
  } else if (direction === -1
    && obstaclesTiles.indexOf(map[marioArrayPosY][Math.floor((mapOffsetX + marioX - 1) / tileSize)]) !== -1) {

    marioDX = 0;
  } else if ((direction === -1 && marioX <= 0) || (direction === 1 && marioX+ tileSize >= canvas.width)) { // if Mario want to go out of the screen (canvas)
    marioDX = 0;

  } else {
    marioDX = 4;
  }

  // if Mario hits question mark (nr 12 in map array)
  if ((marioY + tileSize) < tileSize * 16
    && map[marioArrayPosY][marioArrayPosX] === 12) {
    map[marioArrayPosY][marioArrayPosX] = 'questionMarkOFF';
    // TODO start animation with coin once
  }




}