// tile size
var tileSize = canvas.height / 16; // Game map is 16 tiles high


// Background 2D array
// screen is 16 x 20 tiles (640 x 800px of 40px each)

var map = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,2,2,2,2,3,2,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

// Loop that creates rectangles from map data

for (var y = 0; y < map.length; y++) {
  for (var x = 0; x < map[y].length; x++) {
    switch (map[y][x]) {
      case 0:
        drawTile(x, y, "lightblue"); // sky
        break;
      case 1:
        drawTile(x, y, "green"); // grass
        break;
      case 2:
        drawTile(x, y, "brown"); // bricks
        break;
      case 3:
        drawTile(x, y, "yellow"); // question box
        break;
    }
  }
}

// draws a tile rectangle and fill it with respective color
function drawTile(x, y, type) {
  c.beginPath();
  c.rect(x * tileSize, y * tileSize, tileSize, tileSize);
  c.fillStyle = type;
  c.fill()
  c.closePath();
}
