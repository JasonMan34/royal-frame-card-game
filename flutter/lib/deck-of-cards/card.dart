import 'package:flutter/material.dart';

enum Suit { clubs, diamonds, hearts, spades }

abstract class AbstractCard extends StatelessWidget {
  const AbstractCard({super.key});
}

class PlayingCard extends AbstractCard {
  const PlayingCard({super.key, required this.suit, required this.value})
      : assert(value > 0 && value < 14);

  static final valueToAssetKey = [
    'ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'jack',
    'queen',
    'king'
  ];

  final Suit suit;
  final int value;

  String get valueAssetKey {
    return valueToAssetKey[value - 1];
  }

  @override
  Widget build(BuildContext context) {
    return Image.asset('assets/cards/${valueAssetKey}_of_${suit.name}.png');
  }
}

class EmptyCard extends AbstractCard {
  const EmptyCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Image.asset('assets/cards/red_joker.png');
  }
}