import React from 'react';
import { Image, StyleSheet, ImageSourcePropType, Text } from 'react-native';
import { Card as CardClass } from '../libs/deck-of-cards/Card';
import img_10_of_clubs from '../../assets/cards/10_of_clubs.png';
import img_10_of_diamonds from '../../assets/cards/10_of_diamonds.png';
import img_10_of_hearts from '../../assets/cards/10_of_hearts.png';
import img_10_of_spades from '../../assets/cards/10_of_spades.png';
import img_2_of_clubs from '../../assets/cards/2_of_clubs.png';
import img_2_of_diamonds from '../../assets/cards/2_of_diamonds.png';
import img_2_of_hearts from '../../assets/cards/2_of_hearts.png';
import img_2_of_spades from '../../assets/cards/2_of_spades.png';
import img_3_of_clubs from '../../assets/cards/3_of_clubs.png';
import img_3_of_diamonds from '../../assets/cards/3_of_diamonds.png';
import img_3_of_hearts from '../../assets/cards/3_of_hearts.png';
import img_3_of_spades from '../../assets/cards/3_of_spades.png';
import img_4_of_clubs from '../../assets/cards/4_of_clubs.png';
import img_4_of_diamonds from '../../assets/cards/4_of_diamonds.png';
import img_4_of_hearts from '../../assets/cards/4_of_hearts.png';
import img_4_of_spades from '../../assets/cards/4_of_spades.png';
import img_5_of_clubs from '../../assets/cards/5_of_clubs.png';
import img_5_of_diamonds from '../../assets/cards/5_of_diamonds.png';
import img_5_of_hearts from '../../assets/cards/5_of_hearts.png';
import img_5_of_spades from '../../assets/cards/5_of_spades.png';
import img_6_of_clubs from '../../assets/cards/6_of_clubs.png';
import img_6_of_diamonds from '../../assets/cards/6_of_diamonds.png';
import img_6_of_hearts from '../../assets/cards/6_of_hearts.png';
import img_6_of_spades from '../../assets/cards/6_of_spades.png';
import img_7_of_clubs from '../../assets/cards/7_of_clubs.png';
import img_7_of_diamonds from '../../assets/cards/7_of_diamonds.png';
import img_7_of_hearts from '../../assets/cards/7_of_hearts.png';
import img_7_of_spades from '../../assets/cards/7_of_spades.png';
import img_8_of_clubs from '../../assets/cards/8_of_clubs.png';
import img_8_of_diamonds from '../../assets/cards/8_of_diamonds.png';
import img_8_of_hearts from '../../assets/cards/8_of_hearts.png';
import img_8_of_spades from '../../assets/cards/8_of_spades.png';
import img_9_of_clubs from '../../assets/cards/9_of_clubs.png';
import img_9_of_diamonds from '../../assets/cards/9_of_diamonds.png';
import img_9_of_hearts from '../../assets/cards/9_of_hearts.png';
import img_9_of_spades from '../../assets/cards/9_of_spades.png';
import img_ace_of_clubs from '../../assets/cards/ace_of_clubs.png';
import img_ace_of_diamonds from '../../assets/cards/ace_of_diamonds.png';
import img_ace_of_hearts from '../../assets/cards/ace_of_hearts.png';
import img_ace_of_spades from '../../assets/cards/ace_of_spades.png';
import img_jack_of_clubs from '../../assets/cards/jack_of_clubs.png';
import img_jack_of_diamonds from '../../assets/cards/jack_of_diamonds.png';
import img_jack_of_hearts from '../../assets/cards/jack_of_hearts.png';
import img_jack_of_spades from '../../assets/cards/jack_of_spades.png';
import img_king_of_clubs from '../../assets/cards/king_of_clubs.png';
import img_king_of_diamonds from '../../assets/cards/king_of_diamonds.png';
import img_king_of_hearts from '../../assets/cards/king_of_hearts.png';
import img_king_of_spades from '../../assets/cards/king_of_spades.png';
import img_queen_of_clubs from '../../assets/cards/queen_of_clubs.png';
import img_queen_of_diamonds from '../../assets/cards/queen_of_diamonds.png';
import img_queen_of_hearts from '../../assets/cards/queen_of_hearts.png';
import img_queen_of_spades from '../../assets/cards/queen_of_spades.png';

const ImgMap: Record<string, ImageSourcePropType> = {
  '10_of_clubs': img_10_of_clubs,
  '10_of_diamonds': img_10_of_diamonds,
  '10_of_hearts': img_10_of_hearts,
  '10_of_spades': img_10_of_spades,
  '2_of_clubs': img_2_of_clubs,
  '2_of_diamonds': img_2_of_diamonds,
  '2_of_hearts': img_2_of_hearts,
  '2_of_spades': img_2_of_spades,
  '3_of_clubs': img_3_of_clubs,
  '3_of_diamonds': img_3_of_diamonds,
  '3_of_hearts': img_3_of_hearts,
  '3_of_spades': img_3_of_spades,
  '4_of_clubs': img_4_of_clubs,
  '4_of_diamonds': img_4_of_diamonds,
  '4_of_hearts': img_4_of_hearts,
  '4_of_spades': img_4_of_spades,
  '5_of_clubs': img_5_of_clubs,
  '5_of_diamonds': img_5_of_diamonds,
  '5_of_hearts': img_5_of_hearts,
  '5_of_spades': img_5_of_spades,
  '6_of_clubs': img_6_of_clubs,
  '6_of_diamonds': img_6_of_diamonds,
  '6_of_hearts': img_6_of_hearts,
  '6_of_spades': img_6_of_spades,
  '7_of_clubs': img_7_of_clubs,
  '7_of_diamonds': img_7_of_diamonds,
  '7_of_hearts': img_7_of_hearts,
  '7_of_spades': img_7_of_spades,
  '8_of_clubs': img_8_of_clubs,
  '8_of_diamonds': img_8_of_diamonds,
  '8_of_hearts': img_8_of_hearts,
  '8_of_spades': img_8_of_spades,
  '9_of_clubs': img_9_of_clubs,
  '9_of_diamonds': img_9_of_diamonds,
  '9_of_hearts': img_9_of_hearts,
  '9_of_spades': img_9_of_spades,
  ace_of_clubs: img_ace_of_clubs,
  ace_of_diamonds: img_ace_of_diamonds,
  ace_of_hearts: img_ace_of_hearts,
  ace_of_spades: img_ace_of_spades,
  jack_of_clubs: img_jack_of_clubs,
  jack_of_diamonds: img_jack_of_diamonds,
  jack_of_hearts: img_jack_of_hearts,
  jack_of_spades: img_jack_of_spades,
  king_of_clubs: img_king_of_clubs,
  king_of_diamonds: img_king_of_diamonds,
  king_of_hearts: img_king_of_hearts,
  king_of_spades: img_king_of_spades,
  queen_of_clubs: img_queen_of_clubs,
  queen_of_diamonds: img_queen_of_diamonds,
  queen_of_hearts: img_queen_of_hearts,
  queen_of_spades: img_queen_of_spades,
};

interface CardProps {
  card: CardClass;
}

function Card({ card }: CardProps) {
  return <Image style={styles.cardImg} source={ImgMap[card.img]} />;
}

const styles = StyleSheet.create({
  cardImg: {
    width: '100%',
    height: undefined,
    aspectRatio: 500 / 726,
  },
});

export default Card;
