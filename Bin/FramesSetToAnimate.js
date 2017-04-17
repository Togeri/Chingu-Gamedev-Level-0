"use strict";
/**
 * @param spriteSheet - spriteSheet with frames to draw in animation
 * @param ctx - context to draw on
 * @param frames - array with [x,y,width,height] every frames coordinates and size on spriteSheet  
 * @param tileSize - size in witch we have to draw frames on canvas 
 */
function FramesSetToAnimate(spriteSheet, ctx, frames, tileSize) {
    this.image = spriteSheet;
    this.ctx = ctx;
    this.frames = frames;
    this.width = tileSize;
    this.height = tileSize;
    this.currentFrame = 0;
    this.previusTime = new Date().getTime();
}

var _p = FramesSetToAnimate.prototype;

/**
 *  @param  posX and posY -  where to draw a top left corner a frame on canvas 
 */
_p.draw = function (posX, posY) {
    this.ctx.drawImage(this.image, this.frames[this.currentFrame][0], this.frames[this.currentFrame][1], this.frames[this.currentFrame][2], this.frames[this.currentFrame][3],
        posX - mapOffsetX, posY, this.width, this.height);
    var now = new Date().getTime();
    if (now - this.previusTime > 150) {  // how often the frame should change
        this.previusTime = now;
        if (this.currentFrame === this.frames.length - 1) {
            this.currentFrame = 0;
        } else {
            this.currentFrame++;
        }
    }
}
