import React from "react";
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CardMini} from "../components/Cards/CardMini";
import {Colors} from "../styles";

export const Test = () => (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>This page is under construction</Text>
        <CardMini title={"Incredible"}
                  active={2}
                  id={1}
                  icon={<Image source={require("../images/avatars/artworks.jpg")}
                               style={{width: 40, height: 40}} />}
        />
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
