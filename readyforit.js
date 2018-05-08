class Person {
  constructor(firstImpression, pronoun) {
    this.readyForIt = false;

    this.firstImpression = firstImpression;
    this.pronoun = pronoun;
  }
  see(otherPerson) {
    return `Knew ${otherPerson.pronoun} was a ${otherPerson.firstImpression}`;
  }
}

class Joe extends Person {
  constructor() {
    super('Killer', 'he');
  }
  touchTaylor() {
    this.alone = false;
  }
}

class Taylor extends Person {
  constructor() {
    super('Robber', 'I');
  }

  stealHearts() {
    const sorry = false;
    while (!sorry) {
      this.stealHearts();
    }    
  }
}




