import React from "react";
import {StyleSheet, Text, View, Pressable} from "react-native";
import DropShadow from "react-native-drop-shadow";
import {Colors, Fonts, ScreenSize, Shadows} from "../../styles";
import {VisaLogoIcon} from "../../images/svg";
import {BankCardSmallProps} from "../../utilities";

export const BankCardSmall = ({cardNumber, amount, active, id, onPress}: BankCardSmallProps) => {
  const styles = active === id ? activeStyles : baseStyles

  return (
    <DropShadow style={styles.shadow}>
      <Pressable style={styles.container} onPress={onPress}>
        <VisaLogoIcon color={active === id ? Colors.white : Colors.gray}/>
        <View style={styles.card_number_box}>
          <Text style={styles.card_number}>*  *  *  *</Text>
          <Text style={styles.card_number}>{cardNumber}</Text>
        </View>
        <Text style={styles.amount}>{amount}</Text>
      </Pressable>
    </DropShadow>
  )
}

const baseStyles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    width: ScreenSize.width * 38.4,
    height: ScreenSize.height * 14.72,
    padding: 12,
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.gray_box,
  },

  card_number_box: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card_number: {
    fontFamily: Fonts.font,
    fontSize: 18,
    fontWeight: "500",
    color: Colors.gray,
  },

  amount: {
    fontFamily: Fonts.font,
    fontSize: 12,
    fontWeight: "500",
    color: Colors.gray,
  },

  logo: {
    color: Colors.gray,
  },

  shadow: Shadows.card_shadow_gray,
})

const activeStyles = StyleSheet.create({
  ...baseStyles,

  container: {
    ...baseStyles.container,
    backgroundColor: Colors.purple,
  },

  card_number: {
    ...baseStyles.card_number,
    color: Colors.white,
  },

  amount: {
    ...baseStyles.amount,
    color: 'rgba(255, 255, 255, 0.7)',
  },

  logo: {
    color: Colors.white,
  },

  shadow: Shadows.card_shadow_purple,
})
