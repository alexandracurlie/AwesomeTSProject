import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {CardNumber} from "./CardNumber";
import {CardHeader} from "./CardHeader";
import {CardFooter} from "./CardFooter";
import {CardProps} from "./utilities";

export const Card = ({ backgroundColor, cardNumber, expires, cardHolder, onSwap}: CardProps) => {

  const shadowColor = backgroundColor

  return (
    <Pressable onPress={() => onSwap}>
      <View style={[styles.card, {backgroundColor}]}>
        <CardHeader />
        <CardNumber number={cardNumber}/>
        <CardFooter expires={expires} cardHolder={cardHolder} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    padding: 20,
    borderRadius: 6,
    justifyContent: 'space-between',
  },
});
