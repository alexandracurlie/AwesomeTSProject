import React from "react";
import {StyleSheet, View, Text, Pressable} from "react-native";
import {Colors, Fonts} from "../../../styles";
import { TextInput } from 'react-native-paper';

export const TransactionForm = () => (
    <View style={styles.container}>
      <TextInput mode={"outlined"}
                 label={"Amount"}
                 left={<TextInput.Affix text={"$"} textStyle={styles.text} />}
                 style={styles.input}
                 selectionColor={Colors.purple}
                 outlineColor={Colors.gray_light}
                 placeholderTextColor={Colors.gray}
      />

      <TextInput mode={"outlined"}
                 label={"Description (optional)"}
                 style={styles.input}
                 placeholderTextColor={Colors.gray}
                 selectionColor={Colors.purple}
                 outlineColor={Colors.gray_light}

      />
      <Pressable style={styles.btn}>
        <Text style={styles.btn_text}>Confirm</Text>
      </Pressable>
    </View>
  )

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },

  input: {
    marginBottom: 10,
    backgroundColor: Colors.background,
    fontFamily: Fonts.font,
  },

  text: {
    paddingLeft: 20,
    fontFamily: Fonts.font,
    fontSize: 18,
    color: Colors.gray_light,
  },

  btn: {
    width: "100%",
    padding: 14,
    marginTop: 15,
    marginBottom: 40,
    backgroundColor: Colors.purple,
    borderRadius: 6,
  },

  btn_text: {
    color: Colors.white,
    textAlign: "center",
    lineHeight: 24,
    fontFamily: Fonts.font,
    fontWeight: "600",
    fontSize: 16,
  }
})
