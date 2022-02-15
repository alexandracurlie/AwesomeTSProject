import React from "react";
import {StyleSheet, Text, View, Pressable} from "react-native";
import {Avatar} from "../Avatar/Avatar";
import {Colors, Fonts} from "../../styles";

export type ProfileCardProps = {
  id: number | string,
  name: string,
  lastName: string,
  onPress?: () => void,
  active?: number | string
}

export const ProfileCard = ({name, lastName, id, onPress, active}: ProfileCardProps) => {
  const styles = active === id ? activeStyles : baseStyles

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Avatar userMode={false} />
      <View style={styles.text_box}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{lastName}</Text>
      </View>
    </Pressable>
  )
}

const baseStyles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 144,
    height: 120,
    borderRadius: 6,
    padding: 12,
    margin: 8,
    backgroundColor: Colors.gray_box,
  },

  text_box: {
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontFamily: Fonts.font,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: Colors.gray,
  },
})

const activeStyles = StyleSheet.create({
  ...baseStyles,

  container: {
    ...baseStyles.container,
    backgroundColor: Colors.purple,
  },

  text: {
    ...baseStyles.text,
    color: Colors.white,
  },
})
