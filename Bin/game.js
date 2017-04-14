"use strict"
// Global variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var imageManager;


function init() {

  imageManager = new ImageManager();
  imageManager.load({

    "enemiesSheet": 'Assets/img/Enemies.png',
    "itemkSheet": 'Assets/img/Item and Brick Blocks.png',
    "objectsSheet": 'Assets/img/Items & Objects.png',
    "mario": 'Assets/img/mario_lui.png',
    "tileSet": 'Assets/img/Tileset.png',
    "textSheet": 'Assets/img/Time Up Game Over Screens and Text.png',
    "titleSheet": 'Assets/img/Title Screen.png'

  }, onLoaded, onProgress);
}

function onProgress(loaded, total, key, path, success) {
  if (success) {
    // Progress bar 
    console.log("loaded " + loaded + " from " + total + " images");
  } else {
    // Error handling
    console.log("ERROR: Image not loaded " + path);
  }
}

function onLoaded() {
  console.log("All images loaded");
  tileSet = imageManager.get("tileSet"); // tileSet is declered in map.js
  mario = imageManager.get("mario");    //  mario is declered in player.js

  tilesInit(); //Fill the tileX, tileY arrays
  loop();
}

function loop() {
  mapDraw();
  marioDraw();
  marioSprite();
  marioMove();

  setTimeout(loop, 17);
}