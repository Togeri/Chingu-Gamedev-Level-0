'use strict';
var marioArrayPosY;
var marioArrayPosX;

var testOfCollision = function () {
  marioArrayPosY = Math.floor(marioY / tileSize); // calculate Y row in map array
  marioArrayPosX = Math.floor((mapOffsetX + marioX + (tileSize / 2)) / tileSize); // calculate X column in map array

  if ((marioY + tileSize) < tileSize * 16
    && map[marioArrayPosY][marioArrayPosX] === 12) { // if Mario hits question mark (nr 12 in map array) 
    map[marioArrayPosY][marioArrayPosX] = 'questionMarkOFF';
    // TODO start animation with coin once
  }

  // if mario is jumping and tile 1px above his head is not a sky (nr 1 in map array) take him down with gravity
  if (jumpStatus && map[Math.floor((marioY - 1) / tileSize)][marioArrayPosX] !== 1) {
    gravity = 10;
  }


var obstaclesTails = [5,11,12,13,14,15,16,19,20,21,22,23,24,26,27,30,43,44,45,46,47,'questionMarkOFF']; // mario can walk on those tails elements
  //check if tile under Mario is not a sky 
  if ((marioY + tileSize) < tileSize * 16
    // && map[Math.floor((marioY + tileSize) / tileSize)][marioArrayPosX] !== 1 ) {
    && obstaclesTails.indexOf(map[Math.floor((marioY + tileSize) / tileSize)][marioArrayPosX]) !== -1 ) {

    marioY = tileSize * marioArrayPosY;
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
}