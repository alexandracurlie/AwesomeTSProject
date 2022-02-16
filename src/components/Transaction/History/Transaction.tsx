import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Avatar} from "../../Avatar/Avatar";
import DropShadow from "react-native-drop-shadow";
import {Colors, Fonts, Shadows} from "../../../styles";
import {TransactionProps} from "../../../utilities";

export const Transaction = ({ name, date, amount }: TransactionProps) => (
    <DropShadow style={styles.shadow}>
      <View style={styles.header}>
        <View style={styles.image}>
          <Avatar userMode={false} />
        </View>
        <View style={styles.info}>
          <Text style={styles.font}>to:
            <Text style={styles.name}> {name}</Text>
          </Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amount_title}>$ {amount}</Text>
        </View>
      </View>
    </DropShadow>
  )

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 15,
    marginVertical: 6,
    marginHorizontal: 16,
    backgroundColor: Colors.white,
    borderRadius: 6,
  },

  image: {
    flex: 1,
  },

  info: {
    flex: 3,
    justifyContent: "space-evenly",
  },

  font: {
    color: Colors.gray,
    fontFamily: Fonts.font,
    fontWeight: "300",
    fontSize: 12,
    letterSpacing: 0.2,
  },

  name: {
    color: Colors.black,
    fontWeight: "500",
    fontSize: 14,
  },

  date: {
    color: Colors.dark_gray,
    fontFamily: Fonts.font,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 20,
  },

  amount: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  amount_title: {
    color: Colors.pink_negative,
    fontFamily: Fonts.font,
    fontWeight: "600",
    fontSize: 16,
    textAlign: "right",
  },

  shadow: Shadows.card_shadow_gray,
})
