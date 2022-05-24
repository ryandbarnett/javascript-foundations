class Fairy {
  constructor(name) {
    this.name = name;
    this.disposition = 'Good natured';
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
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
}

module.exports = Fairy;
