function Messages(game) {
  this.game = game;
  this.animate = new Image();

  Messages.prototype.good = function() {
    this.animate.src = './img/GOOD.png';
    this.game.ctx.drawImage(this.animate, 1300, 500, 340, 198);
  };

  Messages.prototype.yeah = function() {
    this.animate.src = './img/yeah.png';
    this.game.ctx.drawImage(this.animate, 1300, 300, 340, 198);
  };
}
