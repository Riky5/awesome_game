const Matter = require("matter-js")

class ScreenController{

  static startScreen(p) {
    p.background('red')
    p.text("PRESS ENTER TO START GAME", p.windowWidth / 2 - 300, p.windowHeight / 2 - 200)
    p.text("PRESS BACKSPACE FOR INSTRUCTIONS", p.windowWidth / 2 - 300, p.windowHeight / 2 )
  }

  static gameScreen(p, game, img) {
    p.background(img);
    Matter.Engine.update(game.engine);
    game.ground.show(p);
    // worm.show(p);
    // worm2.show(p);
  
    // bullets.forEach(element => element.show());
  }

  static gameOverScreen(p) {
    p.background('blue')
    text("GAME OVER. PRESS ENTER TO GO BACK TO MAIN PAGE", windowWidth / 2 - 300, windowHeight / 2)
  }

  static instructionsScreen(p) {
    p.background('red')
    p.textSize(30)
    p.text("Use LEFT and RIGHT to move. UP to jump. CLICK to shoot.", 10, p.windowHeight / 2 - 300 / 2)
    p.text("READY? PRESS ENTER TO GO BACK TO MAIN PAGE", 10, p.windowHeight / 2)
  }

  static setScreen(p, game, img) {
    if(game.mode === 'start') {
      ScreenController.startScreen(p);
    }
    else if(game.mode === 'game') {
      ScreenController.gameScreen(p, game, img);
    }
    else if (game.mode === 'gameOver'){
      ScreenController.gameOverScreen(p);
    }
    else if (game.mode === 'instructions') {
      ScreenController.instructionsScreen(p);
    }
  }
  
  static screenControllerKeyPressed(p, mode) {
    if(mode === 'start') {
      if(keyCode ===ENTER) {
        mode = 'game';
      } 
      else if(keyCode === BACKSPACE) {
        mode = 'instructions';
      }
    }
    else if(mode === 'gameOver' || mode === 'instructions') {
      if(keyCode === ENTER) {
        p.setup();
      }
    }
  }
}

module.exports = ScreenController;


