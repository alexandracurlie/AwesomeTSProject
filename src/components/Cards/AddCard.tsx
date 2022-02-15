import React from "react";
import {View, StyleSheet, Text, Pressable} from "react-native";
import {AddIcon} from "../../images/svg/AddIcon";
import {Colors, Fonts} from "../../styles";

export const AddCard = () => (
  <View style={styles.container}>
    <Pressable style={styles.btn}>
      <AddIcon color={Colors.white} />
    </Pressable>
    <Text style={styles.text}>New {"\n"} credit card</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 144,
    height: 120,
    margin: 8,
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: Colors.gray,
  },

  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: Colors.green_positive,
    borderRadius: 50,
  },

  text: {
    color: Colors.gray,
    fontWeight: "500",
    fontFamily: Fonts.font,
    fontSize: 14,
    textAlign: "center",
  }
})
