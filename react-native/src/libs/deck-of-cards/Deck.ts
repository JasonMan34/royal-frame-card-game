import { Card, CardValues } from './Card';
import { Suits } from './Suit';

export class Deck {
  // TODO: Private!!
  public cards: Card[];

  constructor(shuffled = false) {
    this.cards = [];

    Suits.forEach(suit => {
      CardValues.forEach(value => {
        this.cards.push(new Card(suit, value));
      });
    });

    if (shuffled) {
      this.shuffle();
    }
  }

  public shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
}
