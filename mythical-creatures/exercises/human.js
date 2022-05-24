class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
    this.swungAt = 0;
  }

  noticesOgre() {
    return this.encounterCounter > 0 && this.encounterCounter % 3 == 0;
  }
}

module.exports = Human;
