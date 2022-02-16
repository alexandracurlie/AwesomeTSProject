import React from "react";
import {StyleSheet, View, Text, Pressable} from "react-native";
import DropShadow from "react-native-drop-shadow";
import {Colors, Fonts, Shadows, ScreenSize} from "../../styles";

type CardProps = {
  icon: any,
  title: string,
}

export const Card = ({icon, title}: CardProps) => {
  return (
    <DropShadow style={styles.shadow}>
      <Pressable style={styles.container}>
        <View style={styles.circle}>
          {icon}
        </View>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </DropShadow>
  )
}


const styles = StyleSheet.create({
  container: {
    width: ScreenSize.width * 43.7,
    height: ScreenSize.height * 17.2,
    padding: 12,
    margin: 8,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: Colors.white,
  },

  circle: {
    borderRadius: 50,
    backgroundColor: Colors.purple,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontFamily: Fonts.font,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },

  shadow: Shadows.card_shadow_gray,
})
