import React from "react";
import { StyleSheet, Text } from "react-native";
import {CardNumberProps} from "./utilities";

export const CardNumberPart = ({number}: CardNumberProps) => {
  if (!number) number = "* * * *";

  return <Text style={styles.cardNumber}>{number}</Text>
}

const styles = StyleSheet.create({
  cardNumber: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 26,
    fontFamily: 'Sarabun-SemiBold',
  },
})