"use strict";
var tileSet; // this is spritet sheet with all tiles of background
var mapOffsetX = 0; // left side of the screen in pixels

// var tileSet = images[0];

//Map is a 2D array
//Screen is 16 x 20 tiles (640 x 800px of 40px each)
var map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 2, 2, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var tileSize = canvas.height / 16; // Game map is 16 tiles high

// store tile data in 2 arrays. If you look at tileset, tileX and tileY would correspond to the coordinates of said tile.
// TODO: Maybe do this with 2d array instead?
var tileX = [],
  tileY = [];

function tilesInit() {
  for (var i = 0; i < tileSet.width / 16; i++) {
    tileX[i] = i * 16;
  }
  for (var i = 0; i < tileSet.height / 16; i++) {
    tileY[i] = i * 16;
  }
}

// draws the actual tile
function drawTile(x, y, inputX, inputY, correction) {
  //tileSize = size of tile. inputX,Y = where from tilemap to crop. x,y = where to place tile.
  // (correction) it is to remove 1px line in right side of the pipe
  correction = correction || 0;
  ctx.drawImage(tileSet, inputX, inputY, 16 - correction, 16, x * tileSize - correction - mapOffsetX, y * tileSize, tileSize, tileSize); // minus mapOffsetX to draw only visible columns
}

// Loop that fills in tiles from map data

function updateScreenPosition() {
  if (marioX > canvas.width / 2) { // if Mario want to go further then middle of the screen
    mapOffsetX += marioDX;           // how fast screen is scrolling
    marioX = canvas.width / 2;
  }
}

function mapDraw() {
  ctx.fillStyle = "#63adff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  for (var y = 0; y < map.length; y++) {
    // for (var x = 0; x < map[y].length; x++) {

    var startX = Math.floor(mapOffsetX / tileSize);    // start to draw map from mapOffsetX
    for (var x = startX; x < startX + 21 && x < map[y].length; x++) {  // take canvas width and draw only visible tiles plus one extra on right side
      switch (map[y][x]) {
        case 1:
          drawTile(x, y, tileX[0], tileY[0]); // ground
          break;
        case 2:
          drawTile(x, y, tileX[2], tileY[0]); // bricks
          break;
        case 3:
          // drawTile(x, y, tileX[24], tileY[0]); // question box
          questionMark.draw(x * tileSize, y * tileSize); // "animation" of question mark
          break;
        case 4:
          drawTile(x, y, tileX[0], tileY[9]); // pipe left
          break;
        case 5:
          drawTile(x, y, tileX[0], tileY[8]); // pipe top left
          break;
        case 6:
          drawTile(x, y, tileX[1], tileY[8]); // pipe top right
          break;
        case 7:
          drawTile(x, y, tileX[1], tileY[9], 1); // pipe right
          break;
        case 8:
          drawTile(x, y, tileX[27], tileY[0]); // brick block OFF - drawn on map when Mario hits question mark (change 3 to 8 in map array)
          break;
      }
    }
  }
}