import React from "react";
import {StyleSheet, Text, View} from "react-native";

export const CardHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>VISA</Text>
      <Text style={styles.burgerBtn}>•••</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  logo: {
    textTransform: 'uppercase',
    color: '#fff',
    fontStyle: 'italic',
    fontSize: 15,
    fontWeight: 'bold',
  },

  burgerBtn: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});