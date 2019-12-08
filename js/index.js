window.onload = function() {
  Game.start("canvasExp");

  document.getElementById('start').onclick = function() {
    Game.startLevel();
  }
};