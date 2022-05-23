class Magician {
  constructor(data = {}) {
    this.name = data.name;
    this.topHat = data.topHat != false;
  }

  incantation(spell) {
    return spell.toUpperCase() + '!';
  }
}

module.exports = Magician;
