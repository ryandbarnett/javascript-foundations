class Centaur {
  constructor(data) {
    this.name = data.name;
    this.breed = data.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.actions = 0;
  }

  shoot() {
    this.actions++;
    if (this.actions >= 3) this.cranky = true;
    return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!';
  }

  run() {
    this.actions++;
    if (this.actions >= 3) this.cranky = true;
    return this.cranky || this.layingDown ? 'NO!' : 'Clop clop clop clop!!!';
  }

  sleep() {
    if (this.layingDown) {
      this.actions = 0;
      this.cranky = false;
      return 'ZZZZ';
    } else {
      return 'NO!';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.layingDown) {
      return 'Not while I\'m laying down!';
    } else {
      if (this.cranky) {
        this.cranky = false;
        this.actions = 0;
      } else {
        this.cranky = true;
      }
    }
  }
}

module.exports = Centaur;
