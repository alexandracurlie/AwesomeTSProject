import React from "react";
import {CardInfo} from "./CardInfo";
import {StyleSheet, View} from "react-native";
import {CardProps} from "./utilities";

export const CardFooter = ({ cardHolder, expires }: Pick<CardProps, "cardHolder" | "expires" >) => {
  return (
    <View style={styles.container}>
      <CardInfo title={'Card Holder'} info={cardHolder} />
      <CardInfo title={'Expires'} info={expires} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});