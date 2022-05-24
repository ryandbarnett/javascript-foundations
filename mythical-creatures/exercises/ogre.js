class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }

  apologize(human) {
    human.knockedOut = false;
  }

  encounter(human) {
    human.encounterCounter++;
    if (human.noticesOgre()) { this.swingAt(human) };
  }

  swingAt(human) {
    human.swungAt++;
    this.swings++;
    if (human.swungAt % 2 == 0 && human.swungAt > 0) {
      human.knockedOut = true;
    }
  }
}

module.exports = Ogre;
