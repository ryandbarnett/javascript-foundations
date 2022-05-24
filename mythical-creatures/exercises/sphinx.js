class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(answerAttempt) {
    for (let i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer == answerAttempt) {
        this.riddles.splice(i, 1);
      }
    }
  }
}

module.exports = Sphinx;
