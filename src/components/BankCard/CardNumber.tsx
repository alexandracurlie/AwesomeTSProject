import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {CardNumberPart} from "./CardNumberPart";

export type CardNumberProps = {
  number?: string
}

export const CardNumber = ({number}: CardNumberProps) => {

  return (
    <View style={styles.container}>
      <CardNumberPart />
      <CardNumberPart/>
      <CardNumberPart/>
      <CardNumberPart number={number}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})