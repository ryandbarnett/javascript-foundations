class Magician {
  constructor(data = {}) {
    this.name = data.name;
    this.topHat = data.topHat != false;
  }
}

module.exports = Magician;
