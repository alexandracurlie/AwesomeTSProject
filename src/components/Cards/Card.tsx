import React from "react";
import {StyleSheet, View, Text, Pressable} from "react-native";
import {Colors, Fonts, Shadows, ScreenSize} from "../../styles";

type Props = {
  icon: any,
  title: string,
}

export const Card = ({icon, title}: Props) => (
  <Pressable style={styles.container}>
    <View style={styles.circle}>
      {icon}
    </View>
    <Text style={styles.title}>{title}</Text>
  </Pressable>
)

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
    ...Shadows.card_shadow_gray,
  },

  circle: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: Colors.purple,
  },

  title: {
    fontFamily: Fonts.font,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
})
