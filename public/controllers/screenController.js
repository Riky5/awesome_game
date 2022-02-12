class ScreenController{

  static startScreen() {
    background(wormsLogoImg);
    textSize(28);
    fill("#000000")
    text("Press ENTER to start game", windowWidth / 2 - 174, windowHeight / 2 + 110)
    text("Press BACKSPACE for instructions", windowWidth / 2 - 220, windowHeight / 2 + 160)
  }

  static gameScreen() {
    background(backgroundImg);
    Matter.Engine.update(engine);
    ground.show();
  
    worm.show();
    worm2.show();
  
    bullets.forEach(element => element.show());
  }

  static gameOverScreen() {
    background('#4dd2ff')
    text("GAME OVER. PRESS ENTER TO GO BACK TO MAIN PAGE", windowWidth / 2 - 300, windowHeight / 2)
  }

  static instructionsScreen() {
    background('#00ace6')
    textSize(32)
    text("Use LEFT and RIGHT to move", windowWidth / 2 - 195, windowHeight / 2 - 80)
    text("Use UP to jump", windowWidth / 2 - 195, windowHeight / 2 - 40)
    text("CLICK to shoot", windowWidth / 2 - 195, windowHeight / 2)
    text("Ready? Press ENTER to go back to main page", windowWidth / 2 - 300, windowHeight / 2 + 110 )
  }
}

function setScreen() {
  if(mode === 'start') {
    ScreenController.startScreen();
  }
  else if(mode === 'game') {
    ScreenController.gameScreen();
  }
  else if (mode === 'gameOver'){
    ScreenController.gameOverScreen();
  }
  else if (mode === 'instructions') {
    ScreenController.instructionsScreen();
  }
}

function screenControllerKeyPressed() {
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
      setup();
    }
  }
}
