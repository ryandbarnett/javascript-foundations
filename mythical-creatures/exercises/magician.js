class Magician {
  constructor(data = {}) {
    this.name = data.name;
    this.topHat = data.topHat != false;
  }

  incantation(words) {
    return words.toUpperCase() + '!';
  }

  cast() {
    return 'PULL RABBIT FROM TOP HAT'
  }
}

module.exports = Magician;
