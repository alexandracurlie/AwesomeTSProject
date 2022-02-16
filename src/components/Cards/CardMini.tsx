import React from "react";
import DropShadow from "react-native-drop-shadow";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Colors, Fonts, ScreenSize, Shadows} from "../../styles";

export const CardMini = (props: any) => {
  const styles = props.active === props.id ? activeStyles : baseStyles

  return (
    <DropShadow style={styles.shadow}>
      <Pressable style={[styles.container, props.style && props.style.container]}
                 onPress={props.onPress}>
        <View style={styles.circle}>
          {props.icon}
        </View>
        <Text style={[styles.title, props.style && props.style.title]}>{props.title}</Text>
      </Pressable>
    </DropShadow>
  )
}



const baseStyles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: ScreenSize.width * 38.4,
    height: ScreenSize.height * 14.7,
    borderRadius: 6,
    padding: 12,
    margin: 8,
    backgroundColor: Colors.gray_box,
  },

  circle: {
    borderRadius: 50,
    backgroundColor: Colors.green_positive,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  title: {
    fontFamily: Fonts.font,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: Colors.gray,
    textAlign: "center",
  },

  shadow: {}
})

const activeStyles = StyleSheet.create({
  ...baseStyles,

  container: {
    ...baseStyles.container,
    backgroundColor: Colors.purple,
  },

  title: {
    ...baseStyles.title,
    color: Colors.white,
  },

  shadow: Shadows.card_shadow_purple,
})
