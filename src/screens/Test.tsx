import React from "react";
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors} from "../styles";

export const Test = () => (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>This page is under construction</Text>
      </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
});
