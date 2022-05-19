class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }

  isWhite() {
    if (this.color !== 'white') {
      return false;
    } else {
      return true;
    }
  }

  says(text) {
    return `**;* ${text} *;**`;
  }
}

module.exports = Unicorn;
