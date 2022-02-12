// This is housed in controllers for now, can rethink later

class Game {
  constructor(p, wormImg, matter, ground, worm) {
    this.engine = matter.Engine.create();
    this.world = this.engine.world;
    this.bullets = [];
    this.ground = new ground({x: p.width/2, y: p.height-20, w: p.width, h: 180, world: this.world, matter: matter})
    this.worm = new worm({x: (p.windowWidth/10)*2, y: p.windowHeight - 100, options: "wormOne", img: wormImg[0], matter: matter});
    this.worm2 = new worm({x: (p.windowWidth/10)*8, y: p.windowHeight - 100, options: "wormTwo", img: wormImg[1], matter: matter});
    matter.World.add(this.world, [this.worm.body,this.worm2.body]);
    this.mode = "start";
  }
}

module.exports = Game;

