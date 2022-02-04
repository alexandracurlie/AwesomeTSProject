import React from "react";
import {StyleSheet, Text, Pressable} from "react-native";
import {Colors, Fonts} from "../../styles";
import {TabProps} from "../../constants/types";

export const Tab = ({title, id, isActive, onPress}: TabProps) => (
    <Pressable style={[styles.header, isActive && activeStyles.header]}
               onPress={()=> onPress(id)}
               key={id}
    >
      <Text style={[styles.title, isActive && activeStyles.title]}>
        {title}
      </Text>
    </Pressable>
  )

const styles = StyleSheet.create({
  header: {
    width: "30%",
    paddingVertical: 8,
  },

  title: {
    textAlign: "center",
    fontFamily: Fonts.font,
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.gray,
    lineHeight: 28,
  },
})

const activeStyles = StyleSheet.create({
  header: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.orange,
  },

  title: {
    color: Colors.black_light,
  }
})
