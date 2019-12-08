function Level(game, levelInfo) {
  this.game = game;
  this.info = levelInfo;
  
  this.beatsTiming = levelInfo.beatsTiming;

  this.beatsTiming.map(
    function(beat) {
      beat.grid = new Grid(this.game.ctx, beat.sample);
    }.bind(this)
  );

  this.samples = this.info.samples.map(function(sounds) {
    return {
      name: sounds.name,
      audio: new Audio(sounds.soundURL),
      gridPos: sounds.gridPos,
    };
  });

  this.firstLevelTrack = new Audio(this.info.source);

  this.started = false;
}

Level.prototype.start = function() {
  this.firstLevelTrack.play();

  this.started = true;
};

Level.prototype.checkBeat = function(beat) {
  var result = false;
  this.samples.forEach(
    function(sound) {
      if (sound.gridPos === beat) {
        result = this.searchCloser(sound.name);
        var beatSound = sound.audio.cloneNode();
        beatSound.play();
      } 
    }.bind(this)
  );
  
  return result;
};

Level.prototype.searchCloser = function(beat) {
  var currentTime = Math.round(this.firstLevelTrack.currentTime * 1000);
  var result = false;

  for (var i = 0; i < this.beatsTiming.length; i++) {
    var timing = this.beatsTiming[i];

    if (currentTime >= (timing.time - 100) && currentTime <= (timing.time + 100)){
      console.log(beat.toLowerCase(), timing.sample)
      if (beat.toLowerCase() === timing.sample) {
        i = this.beatsTiming.length;
        result = true;
      }
    }
  }

  return result;
};

Level.prototype.drawGrids = function() {
  if (this.started) {
    var currentTime = Math.round(this.firstLevelTrack.currentTime * 1000);
    this.beatsTiming.forEach(function(beat) {
      if (currentTime < beat.time && currentTime > beat.time - 4000) {
        beat.grid.draw();
      }
    });
  }
};
