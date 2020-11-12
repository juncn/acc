class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Fighter extends Character {
  constructor(name) {
    super(name);
    this.stamina = 100;
  }

  fight() {
    console.log(`${this.name} take a mighty swing!`);
    this.stamina--;
  }
}

class Mage extends Character {
  constructor(name) {
    super(name);
    this.mana = 100;
  }

  cast() {
    console.log(`${this.name} cast a fireball`);
    this.mana--;
  }
}

const zapper = new Mage('Zapper');
const thumper = new Fighter('Thumper');

zapper.cast();
console.log(zapper.mana); // 99

thumper.fight();
console.log(thumper.stamina); // 99