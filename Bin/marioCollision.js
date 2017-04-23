'use strict';
var marioArrayPosY;
var marioArrayPosX;

var testOfCollision = function () {
  marioArrayPosY = Math.floor(marioY / tileSize); // calculate Y row in map array
  marioArrayPosX = Math.floor((mapOffsetX + marioX + (tileSize / 2)) / tileSize); // calculate X column in map array

  // those tails are invisible for Mario
  var backgroundTails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 16, 17, 18, 25, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

  // mario can walk on top of those tails elements and have a collision with them 
  var obstaclesTails = [10, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24, 26, 27, 30, 46, 47, 'questionMarkOFF'];

  if ((marioY + tileSize) < tileSize * 16
    && map[marioArrayPosY][marioArrayPosX] === 12) { // if Mario hits question mark (nr 12 in map array) 
    map[marioArrayPosY][marioArrayPosX] = 'questionMarkOFF';
    // TODO start animation with coin once
  }

  // if mario is jumping and tile 1px above his head is comming from "obstaclesTails" array take him down with gravity
  if (jumpStatus
    && (marioY + tileSize) < tileSize * 16
    && backgroundTails.indexOf(map[Math.floor(marioY / tileSize)][marioArrayPosX]) === -1) {
    gravity = 10;
    console.log('tail above', map[Math.floor(marioY / tileSize)][marioArrayPosX]);
  }

  // check if tile under Mario is comming from 'obstaclesTails' array, if so - stay on that Y pos.
  if ((marioY + tileSize) < tileSize * 16
    // && map[Math.floor((marioY + tileSize) / tileSize)][marioArrayPosX] !== 1 ) {
    && obstaclesTails.indexOf(map[Math.floor((marioY + tileSize) / tileSize)][marioArrayPosX]) !== -1) {

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

  // if mario want to go thru the objects in X axel - stop him
  if (direction === 1
    && obstaclesTails.indexOf(map[marioArrayPosY][Math.floor((mapOffsetX + marioX + tileSize + 1) / tileSize)]) !== -1) {

    marioDX = 0;

  } else if (direction === -1
    && obstaclesTails.indexOf(map[marioArrayPosY][Math.floor((mapOffsetX + marioX - 1) / tileSize)]) !== -1) {

    marioDX = 0;

  } else {
    marioDX = 4;
  }

}