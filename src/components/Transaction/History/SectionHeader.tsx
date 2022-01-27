import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {SectionHeaderProps} from "./utilities";

export const SectionHeader = ({ title }: SectionHeaderProps) => (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },

  title: {
    color: "#757F8C",
    fontFamily: "Sarabun-Medium",
    fontWeight: "500",
    fontSize: 12,
  },
})