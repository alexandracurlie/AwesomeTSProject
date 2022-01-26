import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Header} from './src/components/Header';

import {CardCarousel} from "./src/components/CardCarousel";

const App = () => {

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <Header amount={"$ 926.21"} title={"Your balance"} />
        <CardCarousel />

        <View style={styles.content}></View>
        <View style={styles.footer}></View>


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  content: {
    padding: 16,
    height: "100%",

  },

  footer: {
  }

});

export default App;