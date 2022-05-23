class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
    this.victims = [];
  }

  transform() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = true;
  }

  eat(victim) {
    this.victims.push(victim);
  }
}

module.exports = Werewolf;
