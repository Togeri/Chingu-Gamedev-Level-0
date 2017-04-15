"use strict";

/**
 * @param spriteSheet - spriteSheet with frames to draw in animation
 * @param ctx - context to draw on
 * @param frames - array with (x,y,width,height) every frames coordinates and size on spriteSheet  
 * @param tileSize - size in witch we have to draw frames on canvas 
 * @param  posX and posY -  where to draw a top left corner a frame on canvas 
 *
 */
function QuestionMark(spriteSheet, ctx, frames, tileSize) {
    this.image = spriteSheet;
    this.ctx = ctx;
    this.frames = frames;
    this.width = tileSize;
    this.height = tileSize;
    this.currentFrame = 0;
    this.previusTime = new Date().getTime();
}

var _p = QuestionMark.prototype;

_p.draw = function (posX, posY) {
    // this.ctx.clearRect(posX, posY, this.width, this.height);
    this.ctx.drawImage(this.image, this.frames[this.currentFrame][0], this.frames[this.currentFrame][1], this.frames[this.currentFrame][2], this.frames[this.currentFrame][3],
        posX, posY, this.width, this.height);
    var now = new Date().getTime();
    if (now - this.previusTime > 100) {
        this.previusTime = now;
        if (this.currentFrame === this.frames.length - 1) {
            this.currentFrame = 0;
        } else {
            this.currentFrame++;
        }
    }
}

_p.startAnimate = function () {
    setInterval(this.draw, 1000);
}

// TODO  stopAnimate
