import React from "react";
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import {Header} from "../components/Header/Header";
import {Card} from "../components/Cards/Card";
import {cardsData} from "../utilities";
import {Colors} from "../styles";

export const Settings = () => (
  <SafeAreaView style={styles.safeArea}>
    <ScrollView>
      <Header content={"Settings"} />
      <View style={styles.list}>
        {cardsData.map(item => <Card title={item.title}
                                     icon={item.icon}
                                     key={item.id}/>)}
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  }
});
