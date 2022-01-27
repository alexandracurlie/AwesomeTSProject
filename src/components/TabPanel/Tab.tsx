import React from "react";
import {StyleSheet, Text, Pressable} from "react-native";
import {TabProps} from "./utilities";

export const Tab = ({title, id, isActive, onPress}: TabProps) => (
    <Pressable style={[styles.container, isActive && activeStyles.container]}
               onPress={()=> onPress(id)}
    >
      <Text style={[styles.title, isActive && activeStyles.title]}>{title}</Text>
    </Pressable>
  )

const styles = StyleSheet.create({
  container: {
    width: "30%",
    paddingVertical: 8,
  },

  title: {
    textAlign: "center",
    fontFamily: "Sarabun-Medium",
    fontWeight: "600",
    fontSize: 18,
    color: "#A6AAB4",
    lineHeight: 28,
  },
})

const activeStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: "#FF7D00",
    borderBottomStyle: "solid",
  },

  title: {
    color: "#3B414B",
  }
})