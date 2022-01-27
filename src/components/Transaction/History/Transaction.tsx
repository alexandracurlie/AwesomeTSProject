import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Avatar} from "../../Avatar/Avatar";
import {TransactionProps} from "./utilities";

export const Transaction = ({ name, date, amount }: TransactionProps) => (
    <View style={stylesEl.container}>
      <View style={stylesEl.image}>
        <Avatar userMode={false} />
      </View>
      <View style={stylesEl.info}>
        <Text style={stylesEl.font}>to:
          <Text style={stylesEl.name}> {name}</Text>
        </Text>
        <Text style={stylesEl.date}>{date}</Text>
      </View>
      <View style={stylesEl.amount}>
        <Text style={stylesEl.amount_title}>$ {amount}</Text>
      </View>
    </View>
  )

const stylesEl = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 6,
    flexDirection: "row",
    padding: 15,
    marginVertical: 6,
  },

  image: {
    flex: 1,
  },

  info: {
    flex: 3,
    justifyContent: "space-evenly",
  },

  font: {
    color:"#A6AAB4",
    fontSize: 12,
    fontFamily: "Sarabun-Medium",
    fontWeight: "300",
    letterSpacing: 0.2,

  },

  name: {
    color:"#171D33",
    fontSize: 14,
    fontWeight: "500",
  },

  date: {
    color:"#757F8C",
    fontFamily: "Sarabun-Medium",
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
    color: "#FA2E69",
    fontFamily: "Sarabun-Medium",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "right",
  },
})