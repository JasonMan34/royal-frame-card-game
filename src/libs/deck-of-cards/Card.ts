import { Suit } from './Suit';

export const CardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as const;
export type CardValue = typeof CardValues[number];

export class Card {
  public readonly suit: Suit;
  public readonly value: CardValue;
  public readonly img: string;

  getImg() {
    let str = '';
    if (this.value === 1) {
      str += 'ace';
    } else if (this.value < 11) {
      str += this.value;
    } else if (this.value === 11) {
      str += 'jack';
    } else if (this.value === 12) {
      str += 'queen';
    } else {
      str += 'king';
    }

    str += '_of_' + this.suit.toLowerCase();

    return str;
  }

  constructor(suit: Suit, value: CardValue) {
    this.suit = suit;
    this.value = value;

    this.img = this.getImg();
  }
}
