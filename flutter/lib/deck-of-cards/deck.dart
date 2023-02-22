import 'card.dart';

class Deck {
  final List<PlayingCard> _deck;
  final List<PlayingCard> _drawn = [];

  Deck({bool shuffled = false})
      : _deck = List.generate(
          52,
          (index) => PlayingCard(
            suit: Suit.values[index % 4],
            value: (index % 13) + 1,
          ),
        ) {
    if (shuffled) {
      shuffle();
    }
  }

  void shuffle() {
    for (var i = _deck.length - 1; i > 0; i--) {
      var j = (DateTime.now().microsecondsSinceEpoch ~/ 1000) % (i + 1);

      var temp = _deck[i];
      _deck[i] = _deck[j];
      _deck[j] = temp;
    }
  }

  PlayingCard draw() {
    var drawnCard = _deck.removeAt(0);
    _drawn.add(drawnCard);

    return drawnCard;
  }

  bool isEmpty() {
    return _deck.isEmpty;
  }
}
