class Centaur {
  constructor(data) {
    this.name = data.name;
    this.breed = data.type;
    this.cranky = false;
    this.standing = true;
    this.actions = 0;
  }

  shoot() {
    this.actions++;
    if (this.actions >= 3) this.cranky = true;
    return 'Twang!!!';
  }

  run() {
    this.actions++;
    if (this.actions >= 3) this.cranky = true;
    return 'Clop clop clop clop!!!';
  }
}

module.exports = Centaur;
