function Grid(ctx, sample) {
  this.ctx = ctx;
  this.img = new Image();
      switch (sample) {
        case 'kickdrum':
          this.img.src = './img/gridone.png';
          this.x = 395;
          break;
        case 'snare':
          this.img.src = './img/gridtwo.png';
          this.x = 568;
          break;
        case 'rimshot':
          this.img.src = './img/gridthree.png';
          this.x = 741;
          break;
        case 'closehat':
          this.img.src = './img/gridfour.png';
          this.x = 914;
      }

  this.y = 1390;
  this.frame = 0;
}

Grid.prototype.draw = function() {
  this.y -= 3;

  this.ctx.drawImage(this.img, this.x, this.y, 168, 61);
};
