class Sphinx {
  constructor() {
    this.heroesEaten = 0;
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
        var answeredRiddle = this.riddles.splice(i, 1)[0];
        if (this.riddles.length == 0) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answeredRiddle.answer}\"???`
        }
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      }
    }
    this.heroesEaten++;
  }
}

module.exports = Sphinx;
