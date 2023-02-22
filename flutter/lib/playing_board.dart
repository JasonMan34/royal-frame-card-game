import 'package:app/deck-of-cards/card.dart';
import 'package:app/deck-of-cards/deck.dart';
import 'package:flutter/material.dart';

class PlayingBoard extends StatefulWidget {
  const PlayingBoard({super.key});

  @override
  State<PlayingBoard> createState() => _PlayingBoardState();
}

class _PlayingBoardState extends State<PlayingBoard> {
  Deck deck = Deck(shuffled: true);
  List<List<AbstractCard>> board = [
    [
      const EmptyCard(),
      const EmptyCard(),
      const EmptyCard(),
      const EmptyCard()
    ],
    [
      const EmptyCard(),
      const EmptyCard(),
      const EmptyCard(),
      const EmptyCard()
    ],
    [
      const EmptyCard(),
      const EmptyCard(),
      const EmptyCard(),
      const EmptyCard()
    ],
    [const EmptyCard(), const EmptyCard(), const EmptyCard(), const EmptyCard()]
  ];

  @override
  Widget build(BuildContext context) {
    // var rng = Random();

    // Suit getRandomSuit() {
    //   var randomNumber = rng.nextDouble();

    //   if (randomNumber < 0.25) return Suit.clubs;
    //   if (randomNumber < 0.5) return Suit.diamonds;
    //   if (randomNumber < 0.75) return Suit.hearts;

    //   return Suit.diamonds;
    // }

    // int getRandomInt() {
    //   return rng.nextInt(13) + 1;
    // }

    onTap(rowIndex, colIndex) {
      if (!deck.isEmpty()) {
        setState(() {
          board[rowIndex][colIndex] = deck.draw();
        });
      }
    }

    return Row(
      children: [
        Expanded(
          flex: 2,
          child: Column(children: const [Text("Hey, this is a test")]),
        ),
        Expanded(
          flex: 8,
          child: Column(
            children: board
                .asMap()
                .entries
                .map(
                  (rowEntry) => Expanded(
                    flex: 1,
                    child: Row(
                        children: rowEntry.value
                            .asMap()
                            .entries
                            .map(
                              (colEntry) => Expanded(
                                flex: 1,
                                child: Padding(
                                  padding: const EdgeInsets.only(top: 16),
                                  child: GestureDetector(
                                      onTap: () =>
                                          onTap(rowEntry.key, colEntry.key),
                                      child: colEntry.value),
                                ),
                              ),
                            )
                            .toList()),
                  ),
                )
                .toList(),
          ),
        ),

        // child: GridView.count(
        //   crossAxisCount: 4,
        //   shrinkWrap: true,
        //   children: List.generate(16, (index) {
        //     return Padding(
        //       padding: const EdgeInsets.only(top: 16),
        //       child:
        //           PlayingPlayingCard(suit: getRandomSuit(), value: getRandomInt()),
        //     );
        //   }),
        // )
      ],
    );
  }
}
