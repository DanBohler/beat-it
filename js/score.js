var ScoreBoard = {
  update: function(score, ctx) {
    ctx.font = '200px say_it_fatregular';
    ctx.fillStyle = 'white';
    ctx.fillText(Math.floor(score), 1830, 1100);
    ctx.font = '200px say_it_fatregular';
    ctx.fillStyle = 'red';
    ctx.fillText('score', 1830, 950);
    ctx.textAlign = 'center';
  },
};
