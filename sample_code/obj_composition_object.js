const canCast = state => ({
  cast: spell => {
    console.log(`${state.name} cast ${spell}`);
    state.mana--;
  }
});

const canFight = state => ({
  fight: () => {
    console.log(`${state.name} slashes at the foe`);
    state.stamina--;
  }
});

const fighter = name => {
  let state = {
    name,
    health: 100,
    stamina: 100
  };
  return Object.assign(state, canFight(state));
};

const mage = name => {
  let state = {
    name,
    health: 100,
    mana: 100
  };

  return Object.assign(state, canCast(state));
};

const paladin = name => {
  let state = {
    name,
    health: 100,
    mana: 100,
    stamina: 100
  };
  return Object.assign(state, canCast(state), canFight(state));
};

const slasher = fighter('Slasher');
slasher.fight();
console.log(slasher.stamina);

const scorcher = mage('Scorcher');
scorcher.cast('fireball');
console.log(scorcher.mana);

const roland = paladin('Roland');
roland.cast('snowball');
roland.fight();
console.log('roland.mana', roland.mana);
console.log('roland.stamina', roland.stamina);
