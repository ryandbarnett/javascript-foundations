class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++;
    if (human.noticesOgre()) { this.swingAt() };  
  }

  swingAt() {
    this.swings++;
  }
}

module.exports = Ogre;
