class Worm {
  constructor({x: x, y: y, w: w = 40, h: h= 40, options: options, img: img, matter: matter, direction: direction, weapons: weapons, graveImg: graveImg}) {
    this.body = matter.Bodies.rectangle(x, y, w, h, {label: options});
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.img = img;
    const HP = 100;
    this.hp = HP;
    this.matter = matter;
    this.weapons = weapons;
    this.currentWeapon = this.weapons[0]
    this.direction = direction;
    matter.Body.setInertia(this.body, Infinity);
    this.graveImg = graveImg;
    this.am_i_alive = true;
  }

  show = (p,img = this.img, graveImg = this.graveImg) => {
    const pos = this.body.position;
    const angle = this.body.angle;
    this.body.mass = 8
    if (this.direction === "right") {
      p.push();
      p.translate(pos.x, pos.y);
      p.rotate(angle);
      p.fill(255);

      // WORM IMAGE 
      p.imageMode(p.CENTER);
      if(this.hp > 0) {
        p.image(img, 0, 0, this.w, this.h);
      }
      else {
        p.image(graveImg, 0, 0, this.w, this.h);
      }
      p.pop();

    } else {
      p.push();
      p.translate(pos.x, pos.y);
      p.scale(-1, 1)
      p.rotate(angle);
      p.fill(255);

      // WORM IMAGE 
      p.imageMode(p.CENTER);
      if(this.hp > 0) {
        p.image(img, 0, 0, this.w, this.h);
      }
      else {
        p.image(graveImg, 0, 0, this.w, this.h);
      }
      p.pop();  
    }
    
    // p.rect(this.x, this.y, this.w, this.h);
    // HP above the element
    if (this.hp > 70) {
      p.fill(0, 255, 0)
    } else if (this.hp <= 30) {
      p.fill(255, 0, 0)
    } else if (this.hp <= 70) {
      p.fill(255, 191, 0)
    }

    p.rect(pos.x, pos.y - 70, 40, 20);
    p.fill(0)
    p.textSize(15)
    p.text(this.hp, pos.x + 10, pos.y - 55);
  }

  move(force, mass) {
    this.matter.Body.applyForce(this.body, this.body.position, force)
    this.body.mass = mass
    return this.body.position
  }

  reduceHP(damageValue) {
    if (this.hp > 0) {
      this.hp -= damageValue;
    }
  }

  changeWeapon(weaponInput) {
    if (weaponInput <= this.weapons.length && weaponInput > 0) {
      return this.currentWeapon = this.weapons[weaponInput - 1];
    }
  }

  setDirection(direction) {
    this.direction = direction;
  }
}

module.exports = Worm;