import 'dart:math';

import 'package:app/card.dart';
import 'package:flutter/material.dart';

class PlayingBoard extends StatefulWidget {
  const PlayingBoard({super.key});

  @override
  State<PlayingBoard> createState() => _PlayingBoardState();
}

class _PlayingBoardState extends State<PlayingBoard> {
  @override
  Widget build(BuildContext context) {
    var rng = Random();

    Suit getRandomSuit() {
      var randomNumber = rng.nextDouble();

      if (randomNumber < 0.25) return Suit.clubs;
      if (randomNumber < 0.5) return Suit.diamonds;
      if (randomNumber < 0.75) return Suit.hearts;

      return Suit.diamonds;
    }

    int getRandomInt() {
      return rng.nextInt(13) + 1;
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
              children: [
                Row(
                  children: const [
                    Expanded(flex: 1, child: Center(child: Text("hey"))),
                    Expanded(flex: 1, child: Center(child: Text("hey"))),
                    Expanded(flex: 1, child: Center(child: Text("hey"))),
                    Expanded(flex: 1, child: Center(child: Text("hey")))
                  ],
                ),
                Row(
                  children: const [
                    Expanded(flex: 1, child: Center(child: Text("hey"))),
                    Expanded(flex: 1, child: Center(child: Text("hey"))),
                    Expanded(flex: 1, child: Center(child: Text("hey"))),
                    Expanded(flex: 1, child: Center(child: Text("hey")))
                  ],
                ),
                Row(
                  children: const [
                    Expanded(flex: 1, child: Center(child: Text("hey"))),
                    Expanded(flex: 1, child: Center(child: Text("hey"))),
                    Expanded(flex: 1, child: Center(child: Text("hey"))),
                    Expanded(flex: 1, child: Center(child: Text("hey")))
                  ],
                ),
                Row(
                  children: const [
                    Expanded(flex: 1, child: Center(child: Text("hey"))),
                    Expanded(flex: 1, child: Center(child: Text("hey"))),
                    Expanded(flex: 1, child: Center(child: Text("hey"))),
                    Expanded(flex: 1, child: Center(child: Text("hey")))
                  ],
                ),
              ],
            )
            // child: GridView.count(
            //   crossAxisCount: 4,
            //   shrinkWrap: true,
            //   children: List.generate(16, (index) {
            //     return Padding(
            //       padding: const EdgeInsets.only(top: 16),
            //       child:
            //           PlayingCard(suit: getRandomSuit(), value: getRandomInt()),
            //     );
            //   }),
            // )
            ),
      ],
    );
  }
}
