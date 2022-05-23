class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  transform() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = true;
  }
}

module.exports = Werewolf;
