
var marioArrayPosY;
var marioArrayPosX;

var testOfCollision = function () {
  marioArrayPosY = Math.floor(marioY / tileSize); // calculate Y row in map array
  marioArrayPosX = Math.floor((mapOffsetX + marioX) / tileSize); // calculate X column in map array

  if (map[marioArrayPosY][marioArrayPosX] === 12) { // if Mario hits question mark (nr 12 in map array) 
    map[marioArrayPosY][marioArrayPosX] = 'questionMarkOFF';
    // TODO start animation with coin once
    // Don't let mario jump thru the block - it can be done in other function...
  }
}