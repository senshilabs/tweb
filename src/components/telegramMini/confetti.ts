import JSConfetti from 'js-confetti';

class Confetti {
  private jsConfetti: JSConfetti;

  constructor() {
    this.jsConfetti = new JSConfetti();
  }

  public addConfetti() {
    this.jsConfetti.addConfetti({
      emojis: ['💵', '🎁', '💎', '🤑']
    });
  }
}

export default new Confetti();
