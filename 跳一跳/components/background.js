(function() {
  function Background() {
    var ctx = window.ctx;
    var canvas = window.canvas;
    var img = window.img;
     
    this.draw = draw;
    function draw() {
      ctx.drawImage(img.imgObject.background, 0, 0, canvas.width, canvas.height);
    }
  }

  game.background = new Background();
})();