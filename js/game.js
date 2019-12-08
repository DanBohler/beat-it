var Game = {
  version: 1.0,
  canvas: undefined,
  ctx: undefined,
  w: undefined,
  h: undefined,
  fps: 60,
  scoreBoard: undefined,
  framesCounter: 0,
  keys: {
    ALT_LEFT: 'AltLeft',
    CMD_LEFT: 'MetaLeft',
    CMD_RIGHT: 'MetaRight',
    ALT_RIGHT: 'AltRight',
  },
  background: undefined,
  level: undefined,

  showGood: false,
  showYeah: false,
  messageCounter: undefined,

  _setDimensions: function() {
    this.w = window.innerWidth - 5;
    this.h = window.innerHeight - 5;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  _setHandlers: function() {
    window.onresize = () => {
      this._setDimensions();
    };
  },

  _setListeners: function() {
    document.onkeydown = function(event) {
      switch (event.code) {
        case this.keys.ALT_LEFT:
          var result = this.level.checkBeat(1);
          if (result) this.showGood = true;
          break;
        case this.keys.CMD_LEFT:
          var result = this.level.checkBeat(2);
          if (result) this.showGood = true;
          break;
        case this.keys.CMD_RIGHT:
          var result = this.level.checkBeat(3);
          if (result) this.showYeah = true;
          break;
        case this.keys.ALT_RIGHT:
          var result = this.level.checkBeat(4);
          if (result) this.showYeah = true;
      }
    }.bind(this);



    
  },

  start: function(canvasID) {
    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext('2d');
    this.fps = 60;
    
    this.scoreBoard = ScoreBoard;
    this.score = 0;

    this.background = new Background(this);
    this.timeline = new Timeline(this);
    this.messages = new Messages(this);
    this.level = new Level(this, level1);

    this._setListeners();
    this._setDimensions();
    this._setHandlers();

    this.background.draw();
    this.background.grids();
    this.count = 0;

    function test() {
      var that = this;
      requestAnimationFrame(() => {
        that.clear();
        that.count++;
        that.drawAll();
        test.apply(that);
      }, 1000 / this.fps);
    }

    test.apply(this);
  },

  startLevel: function() {
    this.level.start();
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  drawScore: function () {
    this.scoreBoard.update(this.score, this.ctx)
  },

  drawAll: function() {
    this.background.grids();
    this.level.drawGrids();
    this.background.draw();
    
    if (this.score >= 10)
    this.drawScore();
    

    if (this.showGood) {
      if (this.messageCounter === undefined) this.messageCounter = 0;
      this.messageCounter++;

      this.messages.good();
      this.score += 100;
      
      if (this.messageCounter % 10 === 0) {
        this.messageCounter = undefined;
        this.showGood = false;
      }
    }
    if (this.showYeah) {
      if (this.messageCounter === undefined) this.messageCounter = 0;
      this.messageCounter++;

      this.messages.yeah();
      this.score += 10;

      if (this.messageCounter % 10 === 0) {
        this.messageCounter == undefined;
        this.showYeah = false;
      }
    }
      
  },
};

// (function(LaunchControl) {
//   "use strict";

//   var ctrl = new LaunchControl();

//   Promise.resolve().then(function() {
//     return ctrl.open();
//   }).then(function() {
//     ctrl.on("message", function(e) {
//       var input = e.track;

//       var result = Game.level.checkBeat(input+1);
//       if (result) Game.showGood = true;
//       if (result) Game.showYeah = true;

//       console.log(input);
//     });
//   }).catch(function(e) {
//     console.log("ERROR: " + e.toString());
//   });

// })((this.self || global).LaunchControl || require("../"));