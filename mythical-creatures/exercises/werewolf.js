class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
  }

  transform() {
    this.human = !this.human;
    this.wolf = !this.wolf;
  }
}

module.exports = Werewolf;
