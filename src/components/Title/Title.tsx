import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Colors, Fonts} from "../../styles";

type Props = {
  title: string,
}

export const Title = ({ title }: Props) => (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 16,
  },

  title: {
    color: Colors.dark_gray,
    fontFamily: Fonts.font,
    fontWeight: "500",
    fontSize: 12,
  },
})
