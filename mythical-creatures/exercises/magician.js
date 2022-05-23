class Magician {
  constructor(data = {}) {
    this.name = data.name;
    this.topHat = data.topHat != false;
    this.confident = false;
    this.spellsCast = 0;
  }

  incantation(words) {
    return words.toUpperCase() + '!';
  }

  cast() {
    this.spellsCast++;
    if (this.spellsCast >= 3) this.confident = true;
    return this.topHat ? 'PULL RABBIT FROM TOP HAT' : 'PULL DOVE FROM SLEEVE';
  }
}

module.exports = Magician;
