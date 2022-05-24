class Fairy {
  constructor(name) {
    this.name = name;
    this.disposition = 'Good natured';
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.humanWards = [];
    this.stolenInfants = 0;
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
      this.stolenInfants++;
      this.humanWards.push(infant);
      infant.disposition = 'Malicious';
    }

    if (this.stolenInfants >= 3) {
      this.disposition = 'Good natured';
    }
    return infant;
  }
}

module.exports = Fairy;
