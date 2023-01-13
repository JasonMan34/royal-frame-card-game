export const Suits = ["Hearts", "Diamonds", "Spades", "Clubs"] as const;
export type Suit = typeof Suits[number];
