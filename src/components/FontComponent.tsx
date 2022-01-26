import React from "react";
import {StyleSheet, Text} from "react-native";

export const FontComponent = ({children}: any) => (
  <Text style={styles.font}>{children}</Text>
)

const styles = StyleSheet.create({
  font: {
    fontFamily: "Saruban-Medium",
    flex: 1,
  }
})