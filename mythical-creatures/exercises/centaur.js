class Centaur {
  constructor(data) {
    this.name = data.name;
    this.breed = data.type;
  }

  shoot() {
    return 'Twang!!!';
  }

  run() {
    
  }
}

module.exports = Centaur;
