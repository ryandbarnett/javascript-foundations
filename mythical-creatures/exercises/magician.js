class Magician {
  constructor(data = {}) {
    this.name = data.name;
    this.topHat = data.topHat != false;
  }

  incantation(words) {
    return words.toUpperCase() + '!';
  }

  cast() {
    return this.topHat ? 'PULL RABBIT FROM TOP HAT' : 'PULL DOVE FROM SLEEVE';
  }
}

module.exports = Magician;
