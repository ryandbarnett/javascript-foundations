class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++;
  }

  swingAt() {
    this.swings++;
  }
}

module.exports = Ogre;
