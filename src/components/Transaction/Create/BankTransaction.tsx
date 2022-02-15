import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {Colors} from "../../../styles";

export const BankTransaction = () => (
  <View style={styles.container}>
    <Text>Sorry no content available for this page</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
});
