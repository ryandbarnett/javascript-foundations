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
    if (this.riddles[0].answer == answerAttempt) {
      this.riddles.shift();
    }
  }
}

module.exports = Sphinx;
