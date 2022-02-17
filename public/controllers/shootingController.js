const Matter = require("matter-js")
const ZoomController = require('./zoomController')

class ShootingController {

  static fireBullet(p, game, sound){
    let worm = game.getActiveWorm();
    if ( worm.canShoot === true ) {
      game.bulletExists = true;
      let wormPos = game.getWormPos(worm);
      let angleDeg
      if (ZoomController.bottomScreen === true)
      {angleDeg = Math.atan2(wormPos.y - p.mouseY - 200, wormPos.x - p.mouseX);}
      else
      {angleDeg = Math.atan2(wormPos.y - p.mouseY, wormPos.x - p.mouseX);}

      this.bullet = worm.currentWeapon.createBullet(wormPos, game)
      game.bullets.push(this.bullet);
      sound.play(); 
      Matter.Body.setVelocity(this.bullet.body,{x:(-p.cos(angleDeg))*this.bullet.velocity, y:-(p.sin(angleDeg))*this.bullet.velocity});
      game.timer.pauseTimer()
      setTimeout(() => {
        game.timer.resetTimer();
        game.changePlayerTurn();
        game.timer.resetTimer();
      },1500)
    worm.canShoot = false
    }
  }
}

module.exports = ShootingController;