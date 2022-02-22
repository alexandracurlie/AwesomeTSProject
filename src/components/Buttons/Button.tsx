import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";
import {Colors, Fonts, Shadows} from "../../styles";

type Props = {
  size: "small" | "large",
  title: string,
  disabled?: boolean,
  onPress: () => void,
}

export const Button = (props: Props) => {
  const styles = props.disabled ? disabledStyles : baseStyles;

  return (
    <Pressable style={[styles.container, styles[props.size]]} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  )
}

const baseStyles = StyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: Colors.purple,
    ...Shadows.card_shadow_purple,
  },

  title: {
    color: Colors.white,
    fontFamily: Fonts.font,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
  },

  small: {
    width: "40%",
    padding: 8,
  },

  large: {
    width: "100%",
    padding: 14,
  }
})

const disabledStyles = StyleSheet.create({
  ...baseStyles,

  container: {
    ...baseStyles.container,
    ...Shadows.card_shadow_gray,
    backgroundColor: Colors.gray_diver,
  },

  title: {
    ...baseStyles.title,
    color: Colors.dark_gray,
  },
})
