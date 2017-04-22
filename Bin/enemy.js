"use strict";
var enemiesSheet;
console.log("test");

// goomba constructor function
function Goomba(x, y, direction) {
  this.speed = 1;
  this.x = x;
  this.y = y;
  this.dead = false;
  this.dir = direction;

  // updates position and draws goomba
  this.update = function() {
    if (!this.dead) {
      if (this.dir === 0) {
        this.x -= this.speed; //left
      } else if (this.dir === 1) {
        this.x += this.speed; //right
      }
      goombaAnimations.draw(this.x, this.y);
    }

    // if dead
    else {
      // die animation

    }
  }

  // die - trigger this when being squashed by mario
  this.die = function() {
    this.dead = true;
  }
}
