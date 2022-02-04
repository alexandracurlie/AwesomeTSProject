import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Header} from '../components/Header/Header';
import {CardCarousel} from "../components/CardCarousel/CardCarousel";
import {TransactionHistory} from "../components/Transaction/TransactionHistory";
import {Colors} from "../styles";

export const Home = () => (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Header amount={'926.21'} title={'Your balance'} />
        <CardCarousel />
        <TransactionHistory />
        <View />
      </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
