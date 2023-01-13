import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';
import { Deck } from './src/libs/deck-of-cards/Deck';

export default function App() {
  const [deck, setDeck] = useState(() => new Deck(true));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      {/* {deck.cards.map(card => {
        return <Text key={card.img}>{card.img}</Text>;
      })} */}
      <StatusBar style="auto" />
      <View style={styles.card}>
        <Card card={deck.cards[0]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(9, 107, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  card: {
    width: 68,
  },
});
