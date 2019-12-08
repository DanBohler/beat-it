function Background(game) {
  this.game = game;
  this.x = 0;
  this.y = 0;
  this.eightyimg = new Image();
  this.tittleNumber = new Image();
  this.tittle = new Image();
  this.eightyimg.src = './img/808Beatit3.png';
  this.tittleNumber.src = './img/808multi.png';
  this.tittle.src = './img/Tittle.png';
}
Background.prototype.grids = function() {
  var gameContext = this.game.ctx
  
  gameContext.fillStyle = '#e60000';
  gameContext.fillRect(395, 0, 168, 1450);

  gameContext.fillStyle = '#ff6600';
  gameContext.fillRect(568, 0, 168, 1450);

  gameContext.fillStyle = '#ffff00';
  gameContext.fillRect(741, 0, 168, 1450);

  gameContext.fillStyle = '#ffffff';
  gameContext.fillRect(914, 0, 168, 1450);
};

Background.prototype.draw = function() {
  this.game.ctx.drawImage(this.eightyimg, 80, 80, 1200, 720);

  this.game.ctx.drawImage(this.tittleNumber, 1359, 20, 999, 248);

  this.game.ctx.drawImage(this.tittle, 1410, 0, 1000, 500);
};
