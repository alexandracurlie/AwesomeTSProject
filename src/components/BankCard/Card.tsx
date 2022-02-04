import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import {CardProps} from "./utilities";
import {Colors, Fonts} from "../../styles";

export const Card = ({ backgroundColor, cardNumber, expires, cardHolder, onSwap}: CardProps) => {

  const data = ['* * * *', '* * * *', '* * * *', cardNumber ]

  return (
    <Pressable onPress={() => onSwap}>
      <View style={[styles.card, {backgroundColor}]}>
        <View style={styles.container}>
          <Text style={styles.logo}>VISA</Text>
        </View>
        <View style={styles.container}>
          { data.map(item => <View><Text style={styles.cardNumber}>{item}</Text></View>) }
        </View>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>Card Holder</Text>
            <Text style={styles.info}>{cardHolder}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Expires</Text>
            <Text style={styles.info}>{expires}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 6,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  logo: {
    textTransform: 'uppercase',
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
    fontStyle: 'italic',
  },

  burgerBtn: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "500",
  },

  cardNumber: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: Fonts.font,
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 26,
  },

  title: {
    textTransform: 'uppercase',
    color: Colors.white,
    fontSize: 12,
  },

  info: {
    color: Colors.white,
    lineHeight: 24,
    letterSpacing: 0.1,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: Fonts.font,
  }
});
