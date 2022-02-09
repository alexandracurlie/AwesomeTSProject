import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Colors, Fonts} from "../../styles";
import {TitleProps} from "../../utilities";

export const Title = ({ title }: TitleProps) => (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )

const styles = StyleSheet.create({
  header: {
    marginVertical: 12,
  },

  title: {
    color: Colors.dark_gray,
    fontFamily: Fonts.font,
    fontWeight: "500",
    fontSize: 12,
  },
})