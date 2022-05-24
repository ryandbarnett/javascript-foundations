class Fairy {
  constructor(name) {
    this.name = name;
    this.disposition = 'Good natured';
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.humanWards = [];
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(dresses) {
    this.clothes.dresses = this.clothes.dresses.concat(dresses);
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  receiveBelief() {
    this.dust++;
  }

  replaceInfant(infant) {
    if (this.disposition == 'Vengeful') {
      this.humanWards.push(infant);
      infant.disposition = 'Malicious';
      return infant;
    }
    return infant;
  }
}

module.exports = Fairy;
